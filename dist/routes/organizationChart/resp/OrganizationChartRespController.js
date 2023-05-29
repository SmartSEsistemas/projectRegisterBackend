import { AppMessage } from "../../../utils/AppMessage.js";
import { backgroundTypeSchema } from "../../../dto/background/BackgroundTypeDTO.js";
import backgroundTypeService from "../../../services/organizationChart/backgroundType/BackgroundTypeService.js";
class BackgroundTypeController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = backgroundTypeSchema.parse(body);
        await backgroundTypeService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Tipo de fundo cadastrado com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = backgroundTypeSchema.parse(body);
        await backgroundTypeService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Tipo de fundo atualizado com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await backgroundTypeService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await backgroundTypeService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Tipo de fundo deletado com sucesso.", 200));
    }
}
export default new BackgroundTypeController();
//# sourceMappingURL=OrganizationChartRespController.js.map