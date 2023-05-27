import { OrganizationChartRespUpdateDTO } from '../../../dto/organizationChart/resp/OrganizationChartRespUpdateDTO.js';
import { OrganizationChartRespDTO } from '../../../dto/organizationChart/resp/OrganizationChartRestDTO.js';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';

class OrganizationChartRespService {
  async create(organizationChartResp: OrganizationChartRespDTO, user_id: number) {
    try {
      await this.checkIds(organizationChartResp);

      if(await this.findOrganizationChartResp(organizationChartResp)) throw new Error("Responsável pelo Responsável pelo organograma já cadastrado.");

      await prismaInstance.prisma().register_resp_organization_chart.create({
        data: {
          ...organizationChartResp,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar Responsável pelo organograma.")});
    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update({organization_chart_resp, reason}: OrganizationChartRespUpdateDTO, user_id: number, organizationChartResp_id: number) {
    try {
      await this.checkIds(organization_chart_resp);
      await this.checkOrganizationChartResp(organizationChartResp_id);

      if(!await prismaInstance.prisma().register_resp_organization_chart.findUnique({ where: {id: reason.register_resp_organization_chart_id}})) throw new Error("ID passado no motivo não existe.");

      await prismaInstance.prisma().register_resp_organization_chart.update({
        where: {id: organizationChartResp_id},
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
      }).catch(()=> {throw new AppMessage("Error ao atualizar Responsável pelo organograma.")})

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(organizationChartResp_id: number) {
    return await prismaInstance.prisma().register_resp_organization_chart.findUnique({
      where: { id: organizationChartResp_id} })
      .catch(()=> {throw new AppMessage("Error ao pegar Responsável pelo organograma.")})
  }

  async delete(organizationChartResp_id: number): Promise<void> {
    try {
      await this.checkOrganizationChartResp(organizationChartResp_id);

      await prismaInstance.prisma().register_resp_organization_chart.delete({
        where: {id: organizationChartResp_id}
      }).catch(() => {throw new Error('Error ao deletar Responsável pelo organograma.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async checkOrganizationChartResp(id: number) {
    const organizationChart = await prismaInstance.prisma().register_organization_chart.findUnique({
      where: {id},
      select: {
        Register_organization_chart_config: true
      }
    }).catch(() => {throw new Error('Error ao pegar Responsável pelo organograma para deletar/editar.')});

    if(!organizationChart) throw new Error('Responsável pelo organograma não encontrada');
    if(organizationChart.Register_organization_chart_config ) throw new Error("Responsável pelo organograma não pode ser deletada/editada pois já foi referenciada.");
  }

  private async findOrganizationChartResp({start_date, register_organization_chart_id}: OrganizationChartRespDTO) {
    return await prismaInstance.prisma().register_resp_organization_chart.findUnique({ where: { register_organization_chart_id_start_date: {register_organization_chart_id, start_date} }});
  }

  private async checkIds({register_natural_person_id, register_organization_chart_id}: OrganizationChartRespDTO) {

    const [naturalPerson, organizationChart] = await Promise.all([
      prismaInstance.prisma().register_natural_person.findUnique({ where: { id: register_natural_person_id } }),
      prismaInstance.prisma().register_organization_chart.findUnique({ where: { id: register_organization_chart_id } })
    ])

    const result = { naturalPerson, organizationChart }
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if(!result[table as keyof typeof result])  errors.push(`ID da tabela ${table} incorreto.`);
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }
}

export default new OrganizationChartRespService();