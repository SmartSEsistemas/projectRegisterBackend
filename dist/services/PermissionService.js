import { AppError } from "../helper/AppError.js";
import prismaInstance from "../prisma/client.js";
class PermissionServices {
    async create(body) {
        if (await prismaInstance.prisma().register_permission.findFirst({ where: { name: body.name } }))
            throw new AppError("Permission já cadastrar com o mesmo nome.");
        await prismaInstance.prisma().register_permission.create({ data: body });
    }
    async createRolePermission({ permission_id, role_id }) {
        try {
            const [role, permission] = await Promise.all([
                prismaInstance.prisma().register_role.findUnique({ where: { id: role_id } }),
                prismaInstance.prisma().register_permission.findUnique({ where: { id: permission_id } })
            ]);
            if (!role || !permission)
                throw new Error("Role ou premission não encontrados");
            await prismaInstance.prisma().register_roles_permission.create({ data: { role_id, permission_id } });
        }
        catch (error) {
            new AppError(error.message);
        }
    }
}
export default new PermissionServices();
//# sourceMappingURL=PermissionService.js.map