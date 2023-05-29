import { AppMessage } from "../../utils/AppMessage.js";
import permissionService from "../../services/permission/PermissionService.js";
class PermissionController {
    async register({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await permissionService.create(body);
        return res.status(201).json({ result: "Role criada." });
    }
    async registerRolePermission({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await permissionService.create(body);
        return res.status(201).json({ result: "Permissoes registradas." });
    }
}
export default new PermissionController();
//# sourceMappingURL=PermissionController.js.map