import { LegalPersonUpdateDTO } from "../../dto/person/legal/LegalPersonUpdateDTO.js";
import { AppMessage } from "../../utils/AppMessage.js";
import prismaInstance from '../../prisma/client.js';
import { Register_legal_person } from "@prisma/client";
import deletePhoto from "../../utils/deletePhoto.js";
import { LegalPersonDTO } from "../../dto/person/legal/LegalPersonDTO.js";

class LegalPersonService {
  async create(person: LegalPersonDTO, user_id: number, entity_id: number, file?: Express.Multer.File): Promise<void> {

    try {
      await this.checkIds(person, entity_id);

      if (await this.findPerson(person.cnpj, entity_id)) throw new Error("Pessoa jurídica já cadastrada.");

      if(file) await this.handlePhoto(file.filename, user_id);

      await prismaInstance.prisma().register_legal_person.create({
        data: {
          ...person,
          first_user: 1,
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

  async update({person, reason}: LegalPersonUpdateDTO, user_id: number, entity_id: number, file?: Express.Multer.File): Promise<void> {
    const {cnpj, ...personWithoutCnpj} = person;

    try {
      await this.checkPerson(cnpj, entity_id);

      await this.checkIds(person, entity_id);

      if(!await prismaInstance.prisma().register_legal_person.findUnique({
        where: {id: reason.person_id}
      })) throw new Error("ID passado no motivo não existe.");

      const personResult = await prismaInstance.prisma().register_legal_person.update({
        where: {cnpj_register_entity_id: { cnpj, register_entity_id: entity_id}},
        data: {
          ...personWithoutCnpj,
          last_user: user_id,
          Register_change_legal_person: {
            create: {
              ...reason,
              first_user: user_id,
              register_entity_id: entity_id
            }
          }
        }
      }).catch(()=> {throw new Error("Error ao atualizar pessoa jurídica")});

      if (!file) return;
      if(personResult.photo) deletePhoto(personResult.photo);
      await prismaInstance.prisma().register_legal_person.update({
        where: { cnpj_register_entity_id: {cnpj, register_entity_id: entity_id} },
        data: {
          Register_photo: {
            update: {
              name_photo: file.filename,
              last_user: user_id
            }
          }
        }
      }).catch(()=> {throw new Error("Error ao atualizar foto da pessoa jurídica.")});

    } catch (error: any) {
      if(file) deletePhoto(file.filename);
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(cnpj: string, register_entity_id: number) {
    return await prismaInstance.prisma().register_legal_person.findUnique({ where: { cnpj_register_entity_id: {cnpj, register_entity_id}}})
    .catch(()=> {throw new AppMessage("Error ao pegar pessoa jurídica.")})
  }

  async delete(cnpj: string, register_entity_id: number): Promise<void> {
    try {
      await this.checkPerson(cnpj, register_entity_id);

      await prismaInstance.prisma().register_legal_person.delete({
        where: { cnpj_register_entity_id: {cnpj, register_entity_id} }
      }).catch(() => {throw new Error('Error ao deletar pessoa jurídica.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async findPerson(cnpj: string, register_entity_id: number): Promise<Register_legal_person | null> {
    return await prismaInstance.prisma().register_legal_person.findUnique({ where: { cnpj_register_entity_id: {cnpj, register_entity_id} }});
  }

  private async checkPerson(cnpj: string, register_entity_id: number) {
    const person = await prismaInstance.prisma().register_legal_person.findUnique({
      where: { cnpj_register_entity_id: {cnpj, register_entity_id} },
      include: {
        Register_entity: true
      } 
    }).catch(() => {throw new Error('Error ao pegar pessoa jurídica para deletar/editar.')});

    if(!person) throw new Error('Pessoa jurídica não encontrada');
    if(person.Register_entity.length > 0 ) throw new Error("Pessoa jurídica não pode ser deletada/editada pois já foi referenciada.");
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

  private async checkIds({register_county_id, state_uf_id}: LegalPersonDTO, entity_id: number): Promise<void> {
    const [county, state, entity] = await Promise.all([
      prismaInstance.prisma().register_county.findUnique({where: {id: register_county_id}}),
      prismaInstance.prisma().register_uf.findUnique({where: {id: state_uf_id}}),
      prismaInstance.prisma().register_entity.findUnique({where: {id: entity_id}}),
    ]);

    const result = { county, state, entity }
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if(!result[table as keyof typeof result])  errors.push(`ID da tabela ${table} incorreto.`);
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }
}

export default new LegalPersonService();