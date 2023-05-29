import { AppError } from "../helper/AppError";
import roleAndPermissionService from "../services/RoleService";
class RoleController {
    async register({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await roleAndPermissionService.create(body);
        return res.status(201).json({ result: "Role criada." });
    }
}
export default new RoleController();
//# sourceMappingURL=RoleController%20copy.js.map