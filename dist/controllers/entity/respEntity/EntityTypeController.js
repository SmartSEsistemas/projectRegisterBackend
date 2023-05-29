import { AppMessage } from "../../../utils/AppMessage.js";
import entityTypeService from "../../../services/entity/entityType/EntityTypeService.js";
import { entityTypeSchema } from "../../../dto/entity/EntityTypeDTO.js";
class RespEntityController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = entityTypeSchema.parse(body);
        await entityTypeService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Tipo de entidade cadastrado com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = entityTypeSchema.parse(body);
        await entityTypeService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Tipo de entidade atualizado com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await entityTypeService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await entityTypeService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Tipo de entidade deletado com sucesso.", 200));
    }
}
export default new RespEntityController();
//# sourceMappingURL=EntityTypeController.js.map