import { AppMessage } from "../../../utils/AppMessage.js";
import { adminTypeSchema } from "../../../dto/organizationChart/admin/AdminTypeDTO.js";
import adminTypeService from "../../../services/organizationChart/adminType/AdminTypeService.js";
class AdminTypeController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = adminTypeSchema.parse(body);
        await adminTypeService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Tipo de administração cadastrado com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = adminTypeSchema.parse(body);
        await adminTypeService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Tipo de administração atualizado com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await adminTypeService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await adminTypeService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Tipo de administração deletado com sucesso.", 200));
    }
}
export default new AdminTypeController();
//# sourceMappingURL=AdminTypeController.js.map