import prismaInstance from '../../../prisma/client.js';
import bcrypt from "bcrypt";
import { AppMessage } from '../../../utils/AppMessage.js';
class UserService {
    async create(user, user_id, entity_id) {
        try {
            await this.checkIds(user);
            if (await this.findUser(user))
                throw new Error("Usuário já cadastrada.");
            await this.checkPerson(user.type_person, user.document, entity_id);
            const { register_person_id, ...userWithoutPerson } = user;
            const hashPassword = bcrypt.hashSync(user.password, 10);
            const userResult = await prismaInstance.prisma().register_user.create({
                data: {
                    ...userWithoutPerson,
                    password: hashPassword,
                    first_user: user_id
                }
            }).catch(() => { throw new Error("Error ao cadastrar Usuário."); });
            if (user.type_person === "NATURAL")
                await prismaInstance.prisma().register_natural_person.update({
                    where: { id: user.register_person_id },
                    data: {
                        register_user_id: userResult.id,
                        last_user: user_id
                    },
                });
            else
                await prismaInstance.prisma().register_legal_person.update({
                    where: { id: user.register_person_id },
                    data: {
                        register_user_id: userResult.id,
                        last_user: user_id
                    },
                });
        }
        catch (error) {
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async update(user, user_id, entity_id) {
        try {
            await this.checkUser(user.register_user_id, entity_id);
            const hashPassword = bcrypt.hashSync(user.user_data.password, 10);
            const { user_data, ...userWithoutData } = user;
            await prismaInstance.prisma().register_user.update({
                where: { id: user.register_user_id },
                data: {
                    ...user_data,
                    password: hashPassword,
                    active: false,
                    last_user: user_id,
                    Register_change_user: {
                        create: {
                            ...userWithoutData,
                            first_user: user_id
                        }
                    }
                }
            }).catch(() => { throw new AppMessage("Error ao atualizar Usuário."); });
        }
        catch (error) {
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async get(user_id) {
        return await prismaInstance.prisma().register_user.findUnique({
            where: { id: user_id }
        })
            .catch(() => { throw new AppMessage("Error ao pegar Usuário."); });
    }
    async delete(user_id, entity_id) {
        try {
            await this.checkUser(user_id, entity_id);
            await prismaInstance.prisma().register_user.delete({
                where: { id: user_id }
            }).catch(() => { throw new Error('Error ao deletar Usuário.'); });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async findUser({ document, register_entity_id }) {
        return await prismaInstance.prisma().register_user.findUnique({
            where: { document_register_entity_id: { document, register_entity_id } }
        }).catch(() => { throw new Error("Error ao procurar Usuário."); });
    }
    async checkPerson(type_person, document, entity_id) {
        let foundPerson = null;
        if (type_person === "NATURAL")
            foundPerson = await prismaInstance.prisma().register_natural_person.findUnique({
                where: { cpf_register_entity_id: { cpf: document, register_entity_id: entity_id } }
            });
        else
            foundPerson = await prismaInstance.prisma().register_legal_person.findUnique({
                where: { cnpj_register_entity_id: { cnpj: document, register_entity_id: entity_id } }
            });
        if (!foundPerson)
            throw new Error("Não possui nenhuma pessoa com o Nº do documento enviado.");
        return foundPerson;
    }
    async checkIds({ register_entity_id, register_permission_id, register_person_id }) {
        const [entity, permission, person] = await Promise.all([
            prismaInstance.prisma().register_entity.findUnique({ where: { id: register_entity_id } }),
            prismaInstance.prisma().register_permission.findUnique({ where: { id: register_permission_id } }),
            prismaInstance.prisma().register_natural_person.findUnique({ where: { id: register_person_id } })
        ]);
        const result = { entity, permission, person };
        const errors = [];
        Object.keys(result).forEach((table) => {
            if (!result[table])
                errors.push(`ID da tabela ${table} incorreto.`);
        });
        if (errors.length)
            throw new AppMessage(errors, 404);
    }
    async checkUser(user_id, entity_id) {
        const userResult = await prismaInstance.prisma().register_user.findUnique({
            where: { id: user_id }
        });
        if (!userResult)
            throw new Error("Usuário não encontrado.");
        if (!userResult.active)
            throw new Error("Usuário já desativa.");
        const foundPerson = await this.checkPerson(userResult.type_person, userResult.document, entity_id);
        if (foundPerson)
            throw new Error("Usuário já referenciado, não pode ser editado/deletado.");
    }
}
export default new UserService();
//# sourceMappingURL=UserService.js.map