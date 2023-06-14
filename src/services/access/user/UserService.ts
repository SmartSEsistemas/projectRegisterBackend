import prismaInstance from '../../../prisma/client.js';
import bcrypt from 'bcrypt';
import { UserDTO } from '../../../dto/access/user/UserDTO.js';
import { AppMessage } from '../../../utils/AppMessage.js';
import { UserUpdateDTO } from '../../../dto/access/user/UserUpdateDTO.js';

class UserService {
  async create(user: UserDTO, user_id: number, entity_id: number) {
    try {
      await this.checkIds(user);
      if (await this.findUser(user)) throw new Error('Usuário já cadastrada.');
      await this.checkPerson(user.type_person, user.document, entity_id);

      const { register_person_id, ...userWithoutPerson } = user;
      const hashPassword = bcrypt.hashSync(user.password, 10);
      const userResult = await prismaInstance
        .prisma()
        .register_user.create({
          data: {
            ...userWithoutPerson,
            password: hashPassword,
            first_user: user_id,
          },
        })
        .catch(() => {
          throw new Error('Error ao cadastrar Usuário.');
        });

      if (user.type_person === 'NATURAL')
        await prismaInstance.prisma().register_natural_person.update({
          where: { id: user.register_person_id },
          data: {
            register_user_id: userResult.id,
            last_user: user_id,
          },
        });
      else
        await prismaInstance.prisma().register_legal_person.update({
          where: { id: user.register_person_id },
          data: {
            register_user_id: userResult.id,
            last_user: user_id,
          },
        });
    } catch (error: any) {
      if (error instanceof AppMessage)
        throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400);
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(user: UserUpdateDTO, user_id: number, entity_id: number) {
    try {
      await this.checkUser(user.register_user_id, entity_id);

      const hashPassword = bcrypt.hashSync(user.user_data.password, 10);
      await prismaInstance
        .prisma()
        .register_user.update({
          where: { id: user.register_user_id },
          data: {
            register_permission_id: user.user_data.register_permission_id,
            password: hashPassword,
            final_date: new Date(),
            active: true,
            last_user: user_id,
            Register_change_user: {
              create: {
                date: user.date,
                description: user.description,
                reason: user.reason,
                first_user: user_id,
              },
            },
          },
        })
        .catch((e) => {
          console.log(e);

          throw new AppMessage('Error ao atualizar Usuário.', 400);
        });
    } catch (error: any) {
      console.log(error);

      if (error instanceof AppMessage)
        throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400);
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(user_id: number) {
    return await prismaInstance
      .prisma()
      .register_user.findUnique({
        where: { id: user_id },
      })
      .catch(() => {
        throw new AppMessage('Error ao pegar Usuário.');
      });
  }

  async delete(user_id: number, entity_id: number): Promise<void> {
    try {
      await this.checkUser(user_id, entity_id);

      await prismaInstance
        .prisma()
        .register_user.delete({
          where: { id: user_id },
        })
        .catch(() => {
          throw new Error('Error ao deletar Usuário.');
        });
    } catch (error: any) {
      throw new AppMessage(error.message, 400);
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  private async findUser({ document, register_entity_id }: UserDTO) {
    return await prismaInstance
      .prisma()
      .register_user.findUnique({
        where: {
          document_register_entity_id: { document, register_entity_id },
        },
      })
      .catch(() => {
        throw new Error('Error ao procurar Usuário.');
      });
  }

  private async checkPerson(
    type_person: string,
    document: string,
    entity_id: number,
  ) {
    const person =
      type_person === 'NATURAL'
        ? await prismaInstance.prisma().register_natural_person.findUnique({
            where: {
              cpf_register_entity_id: {
                cpf: document,
                register_entity_id: entity_id,
              },
            },
            select: {
              Register_resp_entity: true,
              Register_resp_organization_chart: true,
            },
          })
        : await prismaInstance.prisma().register_legal_person.findUnique({
            where: {
              cnpj_register_entity_id: {
                cnpj: document,
                register_entity_id: entity_id,
              },
            },
            select: {
              Register_entity: true,
            },
          });

    if (!person)
      throw new Error(
        'Não possui nenhuma pessoa com o Nº do documento enviado.',
      );

    return person;
  }

  private async checkIds({
    register_entity_id,
    register_permission_id,
    register_person_id,
  }: UserDTO) {
    const [entity, permission, person] = await Promise.all([
      prismaInstance
        .prisma()
        .register_entity.findUnique({ where: { id: register_entity_id } }),
      prismaInstance.prisma().register_permission.findUnique({
        where: { id: register_permission_id },
      }),
      prismaInstance.prisma().register_natural_person.findUnique({
        where: { id: register_person_id },
      }),
    ]);

    const result = { entity, permission, person };
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if (!result[table as keyof typeof result])
        errors.push(`ID da tabela ${table} incorreto.`);
    });

    if (errors.length) throw new AppMessage(errors, 404);
  }

  private async checkUser(user_id: number, entity_id: number) {
    let error = false;

    const userResult = await prismaInstance.prisma().register_user.findUnique({
      where: { id: user_id },
    });

    if (!userResult) throw new Error('Usuário não encontrado.');
    if (!userResult.active) throw new Error('Usuário inativo.');

    const foundPerson = await this.checkPerson(
      userResult.type_person,
      userResult.document,
      entity_id,
    );

    if (
      'Register_resp_entity' in foundPerson &&
      (foundPerson.Register_resp_entity.length > 0 ||
        foundPerson.Register_resp_organization_chart.length > 0)
    )
      error = true;
    if (
      'Register_entity' in foundPerson &&
      foundPerson.Register_entity.length > 0
    )
      error = true;

    if (error)
      throw new Error(
        'Usuário já referenciado, não pode ser editado/deletado.',
      );
  }
}

export default new UserService();
