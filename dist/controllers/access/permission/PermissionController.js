import { AppMessage } from "../../../utils/AppMessage.js";
import { permissionSchema } from "../../../dto/access/permission/PermissionDTO.js";
import permissionService from "../../../services/permission/PermissionService.js";
class PermissionController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = permissionSchema.parse(body);
        await permissionService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Permissão cadastrada com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.name)
            throw new AppMessage('Nome da permission não informado ou incorreto.');
        const data = permissionSchema.parse(body);
        await permissionService.update(data, user.user_id, params.name);
        return res.status(200).json(new AppMessage("Permissão atualizada com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.name)
            throw new AppMessage('Nome da permission não informado ou incorreto.');
        const result = await permissionService.get(params.name);
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.name)
            throw new AppMessage('Nome da permission não informado ou incorreto.');
        await permissionService.delete(params.name);
        return res.status(200).json(new AppMessage("Permissão deletada com sucesso.", 200));
    }
}
export default new PermissionController();
//# sourceMappingURL=PermissionController.js.map