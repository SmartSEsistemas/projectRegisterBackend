import bcrypt from "bcrypt";
import fs from 'fs';
import path from 'path';
import { LegalPersonRegisterDTO } from "../../dto/person/legal/LegalPersonRegisterDTO.js";
import { LegalPersonUpdateDTO } from "../../dto/person/legal/LegalPersonUpdateDTO.js";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from '../../prisma/client.js';
import { ResultResponseMessage } from "../../protocols/ResultResponseMessage.js";
import { Register_legal_person } from "@prisma/client";
import { UserToken } from "../../protocols/UserToken.js";
import deletePhoto from "../../helper/deletePhoto.js";

class LegalPersonService {
  async create(person: LegalPersonRegisterDTO, file: Express.Multer.File): Promise<ResultResponseMessage> {
    const { cnpj } = person;
    const { password, ...personWithoutPassword } = person;
    const existingPerson = await this.findPerson(cnpj);

    if (existingPerson) {
      deletePhoto(file.filename)
      throw new AppError("Pessoa já cadastrada.")
    };

    const hashPassword = bcrypt.hashSync(password, 10);
    return await prismaInstance.prisma().register_legal_person.create({
      data: {
        ...personWithoutPassword,
        User: {
          create: {
            password: hashPassword,
            document: cnpj,
            type_person: 'LEGAL'
          }
        },
        Photo: {
          create: {
            name_photo: file.filename
          }
        }
      }
    }).then(() => ({ status: 'success', message: 'Pessoa jurídica cadastrada com sucesso.' }))
      .catch(() => { throw new AppError('Error ao criar pessoa jurídica.') })
  }

  async update({ document }: UserToken, body: LegalPersonUpdateDTO, file?: Express.Multer.File): Promise<ResultResponseMessage> {
    const { person, reason } = body
    if (!await this.findPerson(document)) throw new AppError("Pessoa não cadastrada.");

    return await prismaInstance.prisma().register_legal_person.update({
      where: { cnpj: document },
      data: {
        ...person,
        Register_change_legal_person: {
          create: { ...reason }
        }
      },
    })
      .then(async (person) => {
        if (!file) return;
        deletePhoto(person.photo);
        await prismaInstance.prisma().register_legal_person.update({
          where: { cnpj: document },
          data: {
            Photo: {
              update: {
                name_photo: file.filename
              }
            }
          }
        })
      })
      .then(() => ({ status: 'success', message: 'Pessoa alterada com sucesso.' }))
      .catch(() => { throw new AppError('Error ao alterar usuário.') })
  }



  async get(cnpj: string) {
    const result = await prismaInstance.prisma().user.findUnique({
      where: { document: cnpj },
      select: { Register_legal_person: true }
    })

    console.log(result?.Register_legal_person);
  }

  private async findPerson(cnpj: string): Promise<Register_legal_person | null> {
    return await prismaInstance.prisma().register_legal_person.findUnique({ where: { cnpj }, include: { User: true } });
  }

}

export default new LegalPersonService();