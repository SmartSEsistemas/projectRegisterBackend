import { AppMessage } from "../../utils/AppMessage.js";
import roleService from "../../services/access/role/RoleService.js";
class RoleController {
    async register({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await roleService.create(body);
        return res.status(201).json({ result: "Role criada." });
    }
    async registerUserRole({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await roleService.createUserRole(body);
        return res.status(201).json({ result: "Role criada." });
    }
}
export default new RoleController();
//# sourceMappingURL=RoleController.js.map