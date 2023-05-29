import { AppMessage } from "../../utils/AppMessage.js";
import { organizationChartSchema } from "../../dto/organizationChart/OrganizationChartDTO.js";
import organizationChartService from "../../services/organizationChart/OrganizationChartService.js";
import { organizationChartUpdateSchema } from "../../dto/organizationChart/OrganizationChartUpdateDTO.js";
class OrganizationChartController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = organizationChartSchema.parse(body);
        await organizationChartService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Organograma cadastrado com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = organizationChartUpdateSchema.parse(body);
        await organizationChartService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Organograma atualizado com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await organizationChartService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await organizationChartService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Organograma deletado com sucesso.", 200));
    }
}
export default new OrganizationChartController();
//# sourceMappingURL=OrganizationChartController.js.map