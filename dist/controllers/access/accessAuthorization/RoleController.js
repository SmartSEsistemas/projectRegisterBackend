import { AppMessage } from "../../../utils/AppMessage.js";
import { roleSchema } from "../../../dto/role/RoleDTO.js";
import roleService from "../../../services/access/role/RoleService.js";
class RoleController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = roleSchema.parse(body);
        await roleService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Role cadastrada com sucesso.", 201));
    }
    async update({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = roleSchema.parse(body);
        await roleService.update(data, user.user_id);
        return res.status(200).json(new AppMessage("Role atualizada com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await roleService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await roleService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Role deletada com sucesso.", 200));
    }
}
export default new RoleController();
//# sourceMappingURL=RoleController.js.map