import { AppMessage } from "../../../utils/AppMessage.js";
import configOrganizationChartService from "../../../services/organizationChart/config/ConfigOrganizationChartService.js";
import { organizationChartConfigSchema } from "../../../dto/organizationChart/config/OrganizationChartConfigDTO.js";
class ConfigOrganizationChartController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = organizationChartConfigSchema.parse(body);
        await configOrganizationChartService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Configuração do organograma cadastrado com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = organizationChartConfigSchema.parse(body);
        await configOrganizationChartService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Configuração do organograma atualizado com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await configOrganizationChartService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await configOrganizationChartService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Configuração do organograma deletado com sucesso.", 200));
    }
}
export default new ConfigOrganizationChartController();
//# sourceMappingURL=ConfigOrganizationChartController.js.map