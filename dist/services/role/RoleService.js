import { AppMessage } from "../../utils/AppMessage.js";
import prismaInstance from "../../prisma/client.js";
class RoleServices {
    async create(body) {
        if (await prismaInstance.prisma().register_role.findFirst({ where: { name: body.name } }))
            throw new AppMessage("Role já cadastrar com o mesmo nome.");
    }
    async createUserRole({ role_id, user_id }) {
        try {
        }
        catch (error) {
        }
    }
}
export default new RoleServices();
//# sourceMappingURL=RoleService.js.map