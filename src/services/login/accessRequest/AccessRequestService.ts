import { AccessRequestDTO } from '../../../dto/login/accessRequest/AccessRequestDTO.js';
import { LegalPersonDTO, legalPersonSchema } from '../../../dto/person/legal/LegalPersonDTO.js';
import { NaturalPersonDTO, naturalPersonSchema } from '../../../dto/person/natural/NaturalPersonDTO.js';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';
import bcrypt from "bcrypt";

class LegalPersonService {

  async create(person: AccessRequestDTO, user_id: number, entity_id: number): Promise<void> {

    try {
      const personResult = await this.checkPersonType(person);
      if("cpf" in personResult && await this.findUser(personResult.cpf, entity_id)) throw new Error("Usuário com o cpf nessa entidade já cadastrada.");
      if("cnpj" in personResult && await this.findUser(personResult.cnpj, entity_id)) throw new Error("Usuário com o cnpj nessa entidade já cadastrada.");
      
      const hashPassword = bcrypt.hashSync(person.password, 10);
      
      const document: string = "cpf" in personResult ? personResult.cpf : personResult.cnpj;
      await prismaInstance.prisma().register_user.create({
        data: {
          active: false,
          document,
          password: hashPassword,
          register_entity_id: entity_id,
          type_person: person.reason,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar usuário")});
      
      if(!await this.checkPerson(personResult, entity_id)) await this.createPerson(personResult, user_id, entity_id);

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  private async createPerson(person: LegalPersonDTO | NaturalPersonDTO, user_id: number, entity_id: number) {
    if("cnpj" in person) await prismaInstance.prisma().register_legal_person.create({
      data: {
        ...person,
        register_entity_id: entity_id,
        first_user: user_id
      }
    })
    else if ("cpf" in person) await prismaInstance.prisma().register_natural_person.create({
      data: {
        ...person,
        register_entity_id: entity_id,
        first_user: user_id
      }
    })
  }

  private async checkPersonType(person: AccessRequestDTO): Promise<LegalPersonDTO | NaturalPersonDTO> {
    return await naturalPersonSchema.safeParseAsync(person.person_data)
    .then(() => naturalPersonSchema.parse(person.person_data))
    .catch(() => legalPersonSchema.parse(person.person_data))
  }


  private async findUser(document: string, register_entity_id: number) {
    return await prismaInstance.prisma().register_user.findUnique({ where: { document_register_entity_id: {document, register_entity_id} }});
  }

  private async checkPerson(person: LegalPersonDTO | NaturalPersonDTO, entity_id: number) {
    if("cnpj" in person) return await prismaInstance.prisma().register_legal_person.findUnique({
      where: {cnpj_register_entity_id: {cnpj: person.cnpj, register_entity_id: entity_id}}
    })
    else if ("cpf" in person) return await prismaInstance.prisma().register_natural_person.findUnique({
      where: {cpf_register_entity_id: { cpf: person.cpf, register_entity_id: entity_id}}
    })
    else return null;
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