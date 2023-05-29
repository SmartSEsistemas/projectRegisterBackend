import { AppError } from "../helper/AppError";
import roleAndPermissionService from "../services/RoleAndPermissionService";
class RoleAndPermission {
    async registerRole({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await roleAndPermissionService.createRole(body);
        return res.status(201).json({ result: "Role criada." });
    }
    async registerPermission({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await roleAndPermissionService.createPermission(body);
        return res.status(201).json({ result: "Role criada." });
    }
}
export default new RoleAndPermission();
//# sourceMappingURL=RoleAndPermissionController.js.map