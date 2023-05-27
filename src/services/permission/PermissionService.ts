import { PermissionDTO } from '../../dto/access/permission/PermissionDTO.js';
import { OrganizationChartDTO } from '../../dto/organizationChart/OrganizationChartDTO.js';
import { OrganizationChartUpdateDTO } from '../../dto/organizationChart/OrganizationChartUpdateDTO.js';
import prismaInstance from '../../prisma/client.js';
import { AppMessage } from '../../utils/AppMessage.js';

class OrganizationChartService {
  async create(permission: PermissionDTO, user_id: number) {
    try {
      await this.checkIds(permission);
      if(await this.findPermission(permission)) throw new Error("Permissão já cadastrada.");

      await prismaInstance.prisma().register_permission.create({
        data: {
          ...permission,
          first_user: user_id,
          Register_role_permission: {
            create: permission.roles_ids.map((id) => ({
              Register_role: { connect: { id } },
            })),
          }
        }
      }).catch(()=> {throw new Error("Error ao cadastrar Permissão.")});
    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(permission: PermissionDTO, user_id: number, permission_name: string) {
    try {
      await this.checkPermission(permission_name);
      await this.checkIds(permission);
      
      await prismaInstance.prisma().register_permission.update({
        where: {name: permission_name},
        data: {
          ...permission,
          last_user: user_id,
          Register_role_permission: {
            createMany: {
              data: permission.roles_ids.map((id) => ({
                register_role_id: id,
                first_user: user_id
              })),      
            }
          }
        }
      }).catch(()=> {throw new AppMessage("Error ao atualizar Permissão.")})

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(permission_name: string) {
    return await prismaInstance.prisma().register_permission.findUnique({
      where: { name: permission_name} })
      .catch(()=> {throw new AppMessage("Error ao pegar Permissão.")})
  }

  async delete(permission_name: string): Promise<void> {
    try {
      await this.checkPermission(permission_name);

      await prismaInstance.prisma().register_permission.delete({
        where: {name: permission_name}
      }).catch(() => {throw new Error('Error ao deletar Permissão.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async findPermission(permission: PermissionDTO) {
    return await prismaInstance.prisma().register_permission.findUnique({where: { name: permission.name}})
    .catch(() => {throw new Error("Error ao procurar Permission")})
  }

  private async checkPermission(name: string) {
    const organizationChart = await prismaInstance.prisma().register_permission.findUnique({
      where: {name},
      select: {
        Register_role_permission: true,
      }
    }).catch(() => {throw new Error('Error ao pegar Permissão para deletar/editar.')});

    if(!organizationChart) throw new Error('Permissão não encontrada');
    if(organizationChart.Register_role_permission.length > 0 ) throw new Error("Permissão não pode ser deletada/editada pois já foi referenciada.");
  }

  private async checkIds({roles_ids}: PermissionDTO) {

    const roles = await prismaInstance.prisma().register_role.findMany({ 
      where: { 
        id: {
          in: roles_ids
        } 
      } 
    });

    const errors: string[] = [];
    roles_ids.map((id) => {
      const result = roles.some((role) => role.id === id );
      if(!result) errors.push(`ID de Nº ${id} da tabela Role não foi encontrado ou está incorreto.`)
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }
}

export default new OrganizationChartService();