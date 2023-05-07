import { RoleDTO } from "../dto/role/RoleDTO";
import { UserRoleDTO } from "../dto/role/UserRoleDTO";
import { AppError } from "../helper/AppError.js";
import prismaInstance from "../prisma/client.js";

class RoleServices {
  async create(body: RoleDTO) {
    if (await prismaInstance.prisma().register_role.findFirst({ where: { name: body.name } })) throw new AppError("Role já cadastrar com o mesmo nome.");

    await prismaInstance.prisma().register_role.create({ data: body });
  }

  async createUserRole({ role_id, user_id }: UserRoleDTO) {
    try {
      const [user, role] = await Promise.all([
        prismaInstance.prisma().user.findUnique({ where: { id: user_id }, select: { Register_user_role: { select: { id: true } } } }),
        prismaInstance.prisma().register_role.findUnique({ where: { id: role_id } }),
      ])

      if (!user || !role) throw new Error("Usuário ou Role não cadastrados.");
      if (user.Register_user_role.includes({ id: role_id })) throw new Error("Usuário já tem essa permissão.");

      await prismaInstance.prisma().register_user_role.create({ data: { role_id, user_id } })
    } catch (error) {

    }
  }
}

export default new RoleServices();