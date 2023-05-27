import { AdminTypeDTO } from '../../../dto/organizationChart/admin/AdminTypeDTO.js';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';

class AdminTypeService {
  async create(adminType: AdminTypeDTO, user_id: number) {
    try {
      await this.checkIds(adminType);
      if(await this.findAdminType(adminType)) throw new Error("Tipo de administração já cadastrada.");
      
      await prismaInstance.prisma().register_admin_type.create({
        data: {
          ...adminType,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar tipo de administração.")});
    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(adminType: AdminTypeDTO, user_id: number, adminType_id: number) {
    try {
      await this.checkIds(adminType);
      await this.checkAdminType(adminType_id);

      await prismaInstance.prisma().register_admin_type.update({
        where: {id: adminType_id},
        data: {
          ...adminType,
          last_user: user_id
        }
      }).catch(()=> {throw new AppMessage("Error ao atualizar Tipo de administração.")})

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(adminType_id: number) {
    return await prismaInstance.prisma().register_admin_type.findUnique({
      where: { id: adminType_id} })
      .catch(()=> {throw new AppMessage("Error ao pegar Tipo de administração.")})
  }

  async delete(adminType_id: number): Promise<void> {
    try {
      await this.checkAdminType(adminType_id);

      await prismaInstance.prisma().register_admin_type.delete({
        where: {id: adminType_id}
      }).catch(() => {throw new Error('Error ao deletar Tipo de administração.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async findAdminType({description, admin_type} :AdminTypeDTO) {
    return await prismaInstance.prisma().register_admin_type.findUnique({
      where: {description_admin_type: { description, admin_type}}
    }).catch(()=> {throw new Error("Error ao procurar tipo de administração.")});
  }

  private async checkAdminType(id: number) {
    const adminType = await prismaInstance.prisma().register_admin_type.findUnique({
      where: {id},
      select: {
        Register_organization_chart: true
      }
    }).catch(() => {throw new Error('Error ao pegar Tipo de administração para deletar/editar.')});

    if(!adminType) throw new Error('Tipo de administração não encontrada');
    if(adminType.Register_organization_chart.length > 0 ) throw new Error("Tipo de administração não pode ser deletada/editada pois já foi referenciada.");
  }

  private async checkIds({register_legal_nature_id}: AdminTypeDTO) {
    const [legalNature] = await Promise.all([
      prismaInstance.prisma().register_legal_nature.findUnique({ where: { id: register_legal_nature_id } })
    ])

    const result = { legalNature}
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if(!result[table as keyof typeof result])  errors.push(`ID da tabela ${table} incorreto.`);
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }
}

export default new AdminTypeService();