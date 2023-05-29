import prismaInstance from '../../prisma/client.js';
import { AppMessage } from '../../utils/AppMessage.js';
class OrganizationChartService {
    async create(organizationChart, user_id) {
        try {
            await this.checkIds(organizationChart);
            await prismaInstance.prisma().register_organization_chart.create({
                data: {
                    ...organizationChart,
                    first_user: user_id
                }
            }).catch(() => { throw new Error("Error ao cadastrar Organograma."); });
        }
        catch (error) {
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async update({ organization_chart, reason }, user_id, organizationChart_id) {
        try {
            await this.checkOrganizationChart(organizationChart_id);
            if (!await prismaInstance.prisma().register_organization_chart.findUnique({ where: { id: reason.register_organization_chart_id } }))
                await prismaInstance.prisma().register_organization_chart.update({
                    where: { id: organizationChart_id },
                    data: {
                        ...organization_chart,
                        last_user: user_id,
                        Register_change_organization_chart: {
                            create: {
                                ...reason,
                                first_user: user_id
                            }
                        }
                    }
                }).catch(() => { throw new AppMessage("Error ao atualizar Organograma."); });
        }
        catch (error) {
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async get(organizationChart_id) {
        return await prismaInstance.prisma().register_organization_chart.findUnique({
            where: { id: organizationChart_id }
        })
            .catch(() => { throw new AppMessage("Error ao pegar Organograma."); });
    }
    async delete(organizationChart_id) {
        try {
            await this.checkOrganizationChart(organizationChart_id);
            await prismaInstance.prisma().register_organization_chart.delete({
                where: { id: organizationChart_id }
            }).catch(() => { throw new Error('Error ao deletar Organograma.'); });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async checkOrganizationChart(id) {
        const organizationChart = await prismaInstance.prisma().register_organization_chart.findUnique({
            where: { id },
            select: {
                Register_organization_chart_config: true
            }
        }).catch(() => { throw new Error('Error ao pegar Organograma para deletar/editar.'); });
        if (!organizationChart)
            throw new Error('Organograma não encontrada');
        if (organizationChart.Register_organization_chart_config)
            throw new Error("Organograma não pode ser deletada/editada pois já foi referenciada.");
    }
    async checkIds({ register_admin_type_id, register_background_type_id, register_entity_id, register_organization_chart_config_id }) {
        const [adminType, backgroundTyper, entity, configOrganizationChart] = await Promise.all([
            prismaInstance.prisma().register_admin_type.findUnique({ where: { id: register_admin_type_id } }),
            prismaInstance.prisma().register_background_type.findUnique({ where: { id: register_background_type_id } }),
            prismaInstance.prisma().register_entity.findUnique({ where: { id: register_entity_id } }),
            prismaInstance.prisma().register_organization_chart_config.findUnique({ where: { id: register_organization_chart_config_id } }),
        ]);
        const result = { adminType, backgroundTyper, entity, configOrganizationChart };
        const errors = [];
        Object.keys(result).forEach((table) => {
            if (!result[table])
                errors.push(`ID da tabela ${table} incorreto.`);
        });
        if (errors.length)
            throw new AppMessage(errors, 404);
    }
}
export default new OrganizationChartService();
//# sourceMappingURL=OrganizationChartService.js.map