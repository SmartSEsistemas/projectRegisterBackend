import { OrganizationChartConfigDTO } from '../../../dto/organizationChart/config/OrganizationChartConfigDTO.js';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';

class ConfigOrganizationChartService {
  async create(organizationChartConfig: OrganizationChartConfigDTO, user_id: number) {
    try {
      await prismaInstance.prisma().register_organization_chart_config.create({
        data: {
          ...organizationChartConfig,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar Configuração de organograma.")});
    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(organizationChartConfig: OrganizationChartConfigDTO, user_id: number, organizationChartConfig_id: number) {
    try {
      await this.checkOrganizationChartConfig(organizationChartConfig_id);

      await prismaInstance.prisma().register_organization_chart_config.update({
        where: {id: organizationChartConfig_id},
        data: {
          ...organizationChartConfig,
          last_user: user_id
        }
      }).catch(()=> {throw new AppMessage("Error ao atualizar Configuração de organograma.")})

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(organizationChartConfig_id: number) {
    return await prismaInstance.prisma().register_organization_chart_config.findUnique({
      where: { id: organizationChartConfig_id} })
      .catch(()=> {throw new AppMessage("Error ao pegar Configuração de organograma.")})
  }

  async delete(organizationChartConfig_id: number): Promise<void> {
    try {
      await this.checkOrganizationChartConfig(organizationChartConfig_id);

      await prismaInstance.prisma().register_organization_chart_config.delete({
        where: {id: organizationChartConfig_id}
      }).catch(() => {throw new Error('Error ao deletar Configuração de organograma.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async checkOrganizationChartConfig(id: number) {
    const backgroundType = await prismaInstance.prisma().register_organization_chart_config.findUnique({
      where: {id},
      select: {
        Register_organization_chart: true
      }
    }).catch(() => {throw new Error('Error ao pegar Configuração de organograma para deletar/editar.')});

    if(!backgroundType) throw new Error('Configuração de organograma não encontrada');
    if(backgroundType.Register_organization_chart.length > 0 ) throw new Error("Configuração de organograma não pode ser deletada/editada pois já foi referenciada.");
  }
}

export default new ConfigOrganizationChartService();