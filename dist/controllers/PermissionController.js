import { AppError } from "../helper/AppError.js";
import permissionService from "../services/PermissionService.js";
class PermissionController {
    async register({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await permissionService.create(body);
        return res.status(201).json({ result: "Role criada." });
    }
    async registerRolePermission({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await permissionService.createRolePermission(body);
        return res.status(201).json({ result: "Permissoes registradas." });
    }
}
export default new PermissionController();
//# sourceMappingURL=PermissionController.js.map