import { AppError } from "../helper/AppError.js";
import prismaInstance from '../prisma/client.js';
class OrganizationChartService {
    async createOrganizationChart(body) {
        try {
            const [backgroundType, organizationChartConfig, adminType] = await Promise.all([
                prismaInstance.prisma().register_background_type.findUnique({ where: { id: body.background_type_id } }),
                prismaInstance.prisma().register_organization_chart_config.findUnique({ where: { id: body.organization_chart_config_id } }),
                prismaInstance.prisma().register_admin_type.findUnique({ where: { id: body.admin_type_id } })
            ]);
            if (!backgroundType || !organizationChartConfig || !adminType)
                throw new Error("Error ao criar organograma");
            await prismaInstance.prisma().register_organization_chart.create({ data: body })
                .catch(() => { throw new AppError("Error ao criar orgonograma."); });
        }
        catch (error) {
            new AppError(error.message);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async updateOrganizationChart({ organization_chart, organization_chart_id, reason }) {
        await prismaInstance.prisma().register_organization_chart.update({
            where: { id: organization_chart_id },
            data: {
                ...organization_chart,
                Register_change_organization_chart: {
                    create: reason
                }
            }
        })
            .catch(() => { throw new AppError("Error ao atualizar o organograma."); });
    }
    async createOrganizationChartConfig(body) {
        await prismaInstance.prisma().register_organization_chart_config.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar configuração do orgonograma."); });
    }
    async createBrackgroundType(body) {
        await prismaInstance.prisma().register_background_type.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar tipo de fundo."); });
    }
    async createOrganizationChartResp(body) {
        const organizationChart = await prismaInstance.prisma().register_organization_chart.findUnique({ where: { id: body.organization_chart_id } });
        if (!organizationChart)
            throw new AppError("Id do organograma informado não encontrado.");
        await prismaInstance.prisma().register_resp_organization_chart.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar responsável para organograma."); });
    }
    async updateOrganizationChartResp({ resp_organization_chart_id, resp_organization_chart, reason }) {
        await prismaInstance.prisma().register_resp_organization_chart.update({
            where: { id: resp_organization_chart_id },
            data: {
                ...resp_organization_chart,
                Register_change_resp_organization_chart: {
                    create: reason
                }
            }
        })
            .catch(() => { throw new AppError("Error ao criar responsável para organograma."); });
    }
}
export default new OrganizationChartService();
//# sourceMappingURL=OrganizationChartService.js.map