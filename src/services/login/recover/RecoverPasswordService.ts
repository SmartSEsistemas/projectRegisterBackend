import bcrypt from 'bcrypt';
import sgMail from '@sendgrid/mail';
import prismaInstance from '../../../prisma/client.js';
import { RecoverDTO } from '../../../dto/login/recover/RecoverPasswordDTO.js';
import { generateRandomPassword } from '../../../utils/generateRandomPassword.js';
import { AppMessage } from '../../../utils/AppMessage.js';

class RecoverServiceService {
  async resetPassword({
    document,
    email,
    entity_id,
  }: RecoverDTO): Promise<void> {
    try {
      const user = await this.findUser(document, entity_id);

      if (!user) throw new Error('Usuário não cadastrado ou inativo.');
      if (!user.active) throw new Error('Usuário inativo.');

      const person = await this.findPerson(
        user.document,
        user.type_person,
        entity_id,
      );
      if (!person) throw new Error('Pessoa não cadastrada.');
      if (person.email != email) throw new Error('E-mail não cadastrado.');

      const temporaryPassword = generateRandomPassword(10);

      sgMail.setApiKey(process.env.EMAIL_TOKEN!);
      const mensage = {
        to: email,
        from: 'phelipedsantos@hotmail.com',
        subject: 'Senha temporária projeto base SmartSE',
        text: 'Conteúdo do email',
        html: `<strong>
        Senha temporária: ${temporaryPassword}
      </strong>`,
      };
      await sgMail.send(mensage).catch(() => {
        throw new Error('Erro ao enviar e-mail para recuperar senha.');
      });

      const hashPassword = bcrypt.hashSync(temporaryPassword, 10);
      await prismaInstance
        .prisma()
        .register_user.update({
          where: {
            document_register_entity_id: {
              document,
              register_entity_id: entity_id,
            },
          },
          data: { password: hashPassword },
        })
        .catch(() => {
          throw new Error('Erro ao salvar novas informações do usuário.');
        });
    } catch (error: any) {
      throw new AppMessage(error.message, 400);
    }
  }

  private async findUser(document: string, register_entity_id: number) {
    return await prismaInstance
      .prisma()
      .register_user.findUnique({
        where: {
          document_register_entity_id: { document, register_entity_id },
        },
      })
      .catch(() => {
        throw new AppMessage('Usuário não encontrado.', 404);
      });
  }

  private async findPerson(
    document: string,
    typePerson: string,
    entity_id: number,
  ) {
    if (typePerson === 'NATURAL')
      return await prismaInstance.prisma().register_natural_person.findUnique({
        where: {
          cpf_register_entity_id: {
            cpf: document,
            register_entity_id: entity_id,
          },
        },
      });
    else if (typePerson === 'LEGAL')
      return await prismaInstance.prisma().register_legal_person.findUnique({
        where: {
          cnpj_register_entity_id: {
            cnpj: document,
            register_entity_id: entity_id,
          },
        },
      });

    return null;
  }
}

export default new RecoverServiceService();
