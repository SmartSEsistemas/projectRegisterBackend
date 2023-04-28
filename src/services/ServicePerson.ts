import { Legal_person, Natural_person } from "@prisma/client";
import { RegisterPersonDTO } from "../dto/person/RegisterPersonDTO.js";
import { UpdatePersonDTO } from "../dto/person/UpdatePersonDTO.js";
import { AppError } from "../helper/AppError.js";
import prismaInstance from '../prisma/client.js';

class ServicePerson {

  async create({document, email, name, password, type_person}: RegisterPersonDTO) {
    if(await this.findPerson(type_person, document)) throw new AppError(`Pessoa já cadastrada`);

    let person;
    if(type_person === 'NATURAL') person = await prismaInstance.prisma().natural_person.create({
      data: {cpf: document, name },
      select: {id: true, cpf: true}
    })
    else person = await prismaInstance.prisma().legal_person.create({
      data: {cnpj: document, name },
      select: {id: true, cnpj: true}
    })
  
    console.log(person);
    
  }

  async update(body: UpdatePersonDTO) {
    console.log(Object.keys(body));
    const { document, type_person, data} = body;

    let person;
    if(type_person === 'NATURAL') person = await prismaInstance.prisma().natural_person.update({
      where: {cpf: body.document},
      data: {...data, cpf: document},
      select: {id: true, cpf: true}
    })
    else await prismaInstance.prisma().legal_person.update({
      where: {cnpj: document},
      data: {...data},
      select: {id: true, cnpj: true}
    })
  
    console.log(person);
    
  }

  async findPerson(type_person: string, document: string): Promise<Natural_person | Legal_person | null>{

    if(type_person === 'NATURAL') return await prismaInstance.prisma().natural_person.findUnique({where: {cpf: document}});
    else return await prismaInstance.prisma().legal_person.findUnique({where: {cnpj: document}});
  }
  
}

export default new ServicePerson();