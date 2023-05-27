import { LoginUserDTO } from "../../dto/user/LoginUserDTO.js";
import { TokenDTO } from "../../dto/user/TokenDTO.js";
import { UserUpdateDTO } from "../../dto/user/UserUpdateDTO.js";
import { AppMessage } from "../../utils/AppMessage.js";
import prismaInstance from '../../prisma/client.js';
import { Register_user } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { UserTokenDTO } from "../../dto/user/UserTokenDTO.js";

class UserService {
  async token({ document, password }: LoginUserDTO): Promise<TokenDTO> {
    console.log(bcrypt.hashSync(password, 10));
    const person = await this.findUser(document)
    if (!person) throw new AppMessage("Usuário não encontrado ou não cadastrado.")

    this.comparePassword(password, person.password);
    
    const secretKey = process.env.JWT_SECRET || 'defaultSecret';
    return {
      token: jwt.sign({
        user: {
          document: person.document,
          type_person: person.type_person,
          entity_id: person.register_entity_id,
          user_id: person.id
        }
      }, secretKey, { expiresIn: '1d' })
    }
  }

  async record({ document, type_person }: UserTokenDTO) {
    return await prismaInstance.prisma().register_user.findUnique({
      where: { document },
      include: {
        Register_legal_person: type_person === 'LEGAL',
        Register_natural_person: type_person === 'NATURAL'
      }
    }).then((person) => {
      return person?.Register_legal_person ?? person?.Register_natural_person;
    }).catch(() => {
      throw new AppMessage('Usuário não encontrado.')
    })
  }

  async update({ document }: UserTokenDTO, { new_password, old_password }: UserUpdateDTO) {
    const user = await prismaInstance.prisma().register_user.findUnique({ where: { document } });
    if (!user) throw new AppMessage('Usuário não encontrado.');

    this.comparePassword(old_password, user.password);
    const hashPassword = bcrypt.hashSync(new_password, 10);

    await prismaInstance.prisma().register_user.update({
      where: { document },
      data: { password: hashPassword }
    })
  }

  private async findUser(document: string): Promise<Register_user | null> {
    return await prismaInstance.prisma().register_user.findUnique({ where: { document } })
  }

  private comparePassword(password: string, hashPassword: string) {
    const userValid = bcrypt.compareSync(password, hashPassword);
    if (!userValid) throw new AppMessage("Nº do documento e/ou senha esta(ão) incorreto(s).");
  }
}

export default new UserService();