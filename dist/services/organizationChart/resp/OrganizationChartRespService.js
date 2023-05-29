import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';
class OrganizationChartRespService {
    async create(organizationChartResp, user_id) {
        try {
            await this.checkIds(organizationChartResp);
            if (await this.findOrganizationChartResp(organizationChartResp))
                throw new Error("Responsável pelo Responsável pelo organograma já cadastrado.");
            await prismaInstance.prisma().register_resp_organization_chart.create({
                data: {
                    ...organizationChartResp,
                    first_user: user_id
                }
            }).catch(() => { throw new Error("Error ao cadastrar Responsável pelo organograma."); });
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
    async update({ organization_chart_resp, reason }, user_id, organizationChartResp_id) {
        try {
            await this.checkIds(organization_chart_resp);
            await this.checkOrganizationChartResp(organizationChartResp_id);
            if (!await prismaInstance.prisma().register_resp_organization_chart.findUnique({ where: { id: reason.register_resp_organization_chart_id } }))
                throw new Error("ID passado no motivo não existe.");
            await prismaInstance.prisma().register_resp_organization_chart.update({
                where: { id: organizationChartResp_id },
                data: {
                    ...organization_chart_resp,
                    last_user: user_id,
                    Register_change_resp_organization_chart: {
                        create: {
                            ...reason,
                            first_user: user_id
                        }
                    }
                }
            }).catch(() => { throw new AppMessage("Error ao atualizar Responsável pelo organograma."); });
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
    async get(organizationChartResp_id) {
        return await prismaInstance.prisma().register_resp_organization_chart.findUnique({
            where: { id: organizationChartResp_id }
        })
            .catch(() => { throw new AppMessage("Error ao pegar Responsável pelo organograma."); });
    }
    async delete(organizationChartResp_id) {
        try {
            await this.checkOrganizationChartResp(organizationChartResp_id);
            await prismaInstance.prisma().register_resp_organization_chart.delete({
                where: { id: organizationChartResp_id }
            }).catch(() => { throw new Error('Error ao deletar Responsável pelo organograma.'); });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async checkOrganizationChartResp(id) {
        const organizationChart = await prismaInstance.prisma().register_organization_chart.findUnique({
            where: { id },
            select: {
                Register_organization_chart_config: true
            }
        }).catch(() => { throw new Error('Error ao pegar Responsável pelo organograma para deletar/editar.'); });
        if (!organizationChart)
            throw new Error('Responsável pelo organograma não encontrada');
        if (organizationChart.Register_organization_chart_config)
            throw new Error("Responsável pelo organograma não pode ser deletada/editada pois já foi referenciada.");
    }
    async findOrganizationChartResp({ start_date, register_organization_chart_id }) {
        return await prismaInstance.prisma().register_resp_organization_chart.findUnique({ where: { register_organization_chart_id_start_date: { register_organization_chart_id, start_date } } });
    }
    async checkIds({ register_natural_person_id, register_organization_chart_id }) {
        const [naturalPerson, organizationChart] = await Promise.all([
            prismaInstance.prisma().register_natural_person.findUnique({ where: { id: register_natural_person_id } }),
            prismaInstance.prisma().register_organization_chart.findUnique({ where: { id: register_organization_chart_id } })
        ]);
        const result = { naturalPerson, organizationChart };
        const errors = [];
        Object.keys(result).forEach((table) => {
            if (!result[table])
                errors.push(`ID da tabela ${table} incorreto.`);
        });
        if (errors.length)
            throw new AppMessage(errors, 404);
    }
}
export default new OrganizationChartRespService();
//# sourceMappingURL=OrganizationChartRespService.js.map