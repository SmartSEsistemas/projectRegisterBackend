import { NaturalPersonUpdateDTO } from "../../dto/person/natural/NaturalPersonUpdateDTO.js";
import { AppMessage } from "../../utils/AppMessage.js"
import prismaInstance from '../../prisma/client.js';
import { Register_natural_person } from "@prisma/client";
import deletePhoto from "../../utils/deletePhoto.js"
import { NaturalPersonDTO } from "../../dto/person/natural/NaturalPersonDTO.js";

class NaturalPersonService {
  async create(person: NaturalPersonDTO, user_id: number, entity_id: number, file?: Express.Multer.File): Promise<void> {
    try {
      await this.checkIds(person, entity_id);

      if (await this.findPerson(person.cpf, entity_id)) throw new Error("Pessoa física já cadastrada.");

      if(file) await this.handlePhoto(file.filename, user_id);

      await prismaInstance.prisma().register_natural_person.create({
        data: {
          ...person,
          first_user: user_id,
          register_entity_id: entity_id,
          photo: file ? file.filename : ''
        }
      }).catch(()=> {throw new Error("Error ao cadastrar pessoa")});

    } catch (error: any) {
      if(file) deletePhoto(file.filename);
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }


  async update({person, reason}: NaturalPersonUpdateDTO, user_id: number, entity_id: number, file?: Express.Multer.File): Promise<void> {
    const {cpf, ...personWithoutCpf} = person;
    
    try {
      await this.checkPerson(cpf, entity_id);
      
      await this.checkIds(person, entity_id);
      
      if(!await prismaInstance.prisma().register_natural_person.findUnique({
        where: {id: reason.person_id}
      })) throw new Error("ID passado no motivo não existe.");
      
      const personResult = await prismaInstance.prisma().register_natural_person.update({
        where: { cpf_register_entity_id: {cpf, register_entity_id: entity_id} },
        data: {
          ...personWithoutCpf,
          last_user: user_id,
          Register_change_natural_person: {
            create: { 
              ...reason,
              first_user: user_id,
              register_entity_id: entity_id
            }
          }
        },
      }).catch(()=> {throw new Error("Error ao atualizar pessoa física")});

      if (!file) return;
      if(personResult.photo) deletePhoto(personResult.photo);
      await prismaInstance.prisma().register_natural_person.update({
        where: { cpf_register_entity_id: { cpf, register_entity_id: entity_id} },
        data: {
          Register_photo: {
            update: {
              name_photo: file.filename,
              last_user: user_id
            }
          }
        }
      }).catch(()=> {throw new Error("Error ao atualizar foto da pessoa física.")});

    } catch (error: any) {
      if(file) deletePhoto(file.filename);
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }
  
  async get(cpf: string, register_entity_id: number) {
    return await prismaInstance.prisma().register_natural_person.findUnique({
      where: { cpf_register_entity_id: {cpf, register_entity_id} } })
      .catch(()=> {throw new AppMessage("Error ao pegar pessoa física.")})
  }

  async delete(cpf: string, register_entity_id: number): Promise<void> {
    try {
      await this.checkPerson(cpf, register_entity_id);
      
      await prismaInstance.prisma().register_natural_person.delete({
        where:{ cpf_register_entity_id: {cpf, register_entity_id} }
      }).catch(() => {throw new Error('Error ao deletar pessoa física.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async checkPerson(cpf: string, register_entity_id: number) {
    const person = await prismaInstance.prisma().register_natural_person.findUnique({
      where: { cpf_register_entity_id: {cpf, register_entity_id} },
      include: {
        Register_resp_entity: true,
        Register_resp_organization_chart: true
      } 
    }).catch(() => {throw new Error('Error ao pegar pessoa física para deletar/editar.')});

    if(!person) throw new Error('Pessoa física não encontrada')
    if(person.Register_resp_entity.length > 0 || person.Register_resp_organization_chart.length > 0) throw new Error("Pessoa física não pode ser deletada/editada pois já foi referenciada.");
  }

  private async findPerson(cpf: string, register_entity_id: number): Promise<Register_natural_person | null> {
    return await prismaInstance.prisma().register_natural_person.findUnique({ where: { cpf_register_entity_id: {cpf, register_entity_id} }});
  }

  private async handlePhoto(filename: string, user_id: number): Promise<void> {
    await prismaInstance.prisma().register_photo.create({ 
      data: { 
        name_photo: filename, 
        first_user: user_id 
      } 
    })
    .catch(()=> {throw new Error("Error ao cadastrar foto")});
  }

  private async checkIds({register_county_id, state_uf_id, register_uf_id}: NaturalPersonDTO, entity_id: number): Promise<void> {
    const [uf, county, state, entity] = await Promise.all([
      prismaInstance.prisma().register_uf.findUnique({where: {id: register_uf_id}}),
      prismaInstance.prisma().register_county.findUnique({where: {id: register_county_id}}),
      prismaInstance.prisma().register_uf.findUnique({where: {id: state_uf_id}}),
      prismaInstance.prisma().register_entity.findUnique({where: {id: entity_id}}),
    ]);

    const result = { uf, county, state, entity }
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if(!result[table as keyof typeof result])  errors.push(`ID da tabela ${table} incorreto.`);
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }
}

export default new NaturalPersonService();