import organizationChartService from "../services/OrganizationChartService.js";
class OrganizationChart {
    async registerOrganizationChart(req, res) {
        await organizationChartService.createOrganizationChart(req.body);
        return res.status(201).json({ result: "Organograma criada." });
    }
    async updateOrganizationChart(req, res) {
        await organizationChartService.updateOrganizationChart(req.body);
        return res.status(200).json({ result: "Organograma atualizado." });
    }
    async registerOrganizationChartConfig(req, res) {
        await organizationChartService.createOrganizationChartConfig(req.body);
        return res.status(201).json({ result: "Configuranção do organograma criado." });
    }
    async registerBackgroundType(req, res) {
        await organizationChartService.createBrackgroundType(req.body);
        return res.status(201).json({ result: "Tipo de fundo criado." });
    }
    async registerOrganizationChartResp(req, res) {
        await organizationChartService.createOrganizationChartResp(req.body);
        return res.status(201).json({ result: "Responsável organograma criado." });
    }
    async updateOrganizationChartResp(req, res) {
        await organizationChartService.updateOrganizationChartResp(req.body);
        return res.status(200).json({ result: "Responsável organograma atualizado." });
    }
}
export default new OrganizationChart();
//# sourceMappingURL=OrganizationChartContoller.js.map