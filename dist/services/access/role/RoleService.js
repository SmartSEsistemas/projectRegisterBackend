import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';
class UserService {
    async create(role, user_id) {
        try {
            if (await this.findRole(role))
                throw new Error('Role já cadastrada.');
            await prismaInstance
                .prisma()
                .register_role.create({
                data: {
                    ...role,
                    first_user: user_id,
                },
            })
                .catch(() => {
                throw new Error('Error ao cadastrar Role.');
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
    async update(role, user_id) {
        try {
            await this.checkRole(role);
            if (!(await this.findRole(role)))
                throw new Error('Role não cadastrada.');
            await prismaInstance
                .prisma()
                .register_role.update({
                where: { name_type: { name: role.name, type: role.type } },
                data: {
                    description: role.description,
                    module: role.module,
                    last_user: user_id,
                },
            })
                .catch(() => {
                throw new AppMessage('Error ao atualizar Role.');
            });
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
    async get(role_id) {
        return await prismaInstance
            .prisma()
            .register_role.findUnique({
            where: { id: role_id },
        })
            .catch(() => {
            throw new AppMessage('Error ao pegar Role.');
        });
    }
    async list() {
        return await prismaInstance
            .prisma()
            .register_role.findMany()
            .catch(() => {
            throw new AppMessage('Error ao pegar Roles.');
        });
    }
    async delete(role_id) {
        try {
            const foundRole = await this.get(role_id);
            if (!foundRole)
                throw new Error('Role não cadastrada.');
            await this.checkRole(foundRole);
            await prismaInstance
                .prisma()
                .register_role.delete({
                where: { id: role_id },
            })
                .catch(() => {
                throw new Error('Error ao deletar Role.');
            });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async findRole({ name, type }) {
        return await prismaInstance
            .prisma()
            .register_role.findUnique({
            where: { name_type: { name, type } },
        })
            .catch(() => {
            throw new Error('Error ao procurar Role.');
        });
    }
    async checkRole({ name, type }) {
        const role = await prismaInstance
            .prisma()
            .register_role.findUnique({
            where: { name_type: { name, type } },
            select: {
                Register_roles_permission: true,
                Register_user_role: true,
            },
        })
            .catch(() => {
            throw new Error('Error ao pegar Role para deletar/editar.');
        });
        if (!role)
            throw new Error('Role não encontrada');
        if (role.Register_roles_permission.length > 0 || role.Register_user_role.length > 0)
            throw new Error('Role não pode ser deletada/editada pois já foi referenciada.');
    }
}
export default new UserService();
//# sourceMappingURL=RoleService.js.map