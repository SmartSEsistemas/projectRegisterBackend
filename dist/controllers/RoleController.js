import { AppError } from "../helper/AppError.js";
import roleService from "../services/RoleService.js";
class RoleController {
    async register({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await roleService.create(body);
        return res.status(201).json({ result: "Role criada." });
    }
    async registerUserRole({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await roleService.createUserRole(body);
        return res.status(201).json({ result: "Role criada." });
    }
}
export default new RoleController();
//# sourceMappingURL=RoleController.js.map