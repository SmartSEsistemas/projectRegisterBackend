import { AppError } from "../helper/AppError";
import prismaInstance from "../prisma/client.js";
class RoleAndPermissionServices {
    async createRole(body) {
        if (await prismaInstance.prisma().register_role.findFirst({ where: { name: body.name } }))
            throw new AppError("Role já cadastrar com o mesmo nome.");
        await prismaInstance.prisma().register_role.create({ data: body });
    }
    async createPermission(body) {
        if (await prismaInstance.prisma().register_permission.findFirst({ where: { name: body.name } }))
            throw new AppError("Permission já cadastrar com o mesmo nome.");
        await prismaInstance.prisma().register_permission.create({ data: body });
    }
}
export default new RoleAndPermissionServices();
//# sourceMappingURL=RoleAndPermissionService.js.map