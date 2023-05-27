import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';
import { RoleDTO } from '../../../dto/access/role/RoleDTO.js';
import { AccessAuthorizationDTO } from '../../../dto/access/accessAuthorization/AccessAuthorizationDTO.js';

class AccessAuthorizationService {

  async create(access: AccessAuthorizationDTO, user_id: number) {
    try {   
      await this.checkIds(access);
      await this.checkUser(access.register_user_id);

      await prismaInstance.prisma().register_access_authorization.create({
        data: {
          ...access,
          user_resp_id: user_id,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar Access Authorization.")});

      await prismaInstance.prisma().register_user.update({
        where: {id: access.register_user_id},
        data: {
          active: true,
          start_date: access.approval_date,
          last_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao atualiza acesso ao usuário.")});

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(access: AccessAuthorizationDTO, user_id: number, access_id: number) {
    try {

      await this.checkIds(access);
      await this.checkUser(access.register_user_id);

      await prismaInstance.prisma().register_access_authorization.update({
        where: { id: access_id},
        data: {
          ...access,
          user_resp_id: user_id,
          last_user: user_id
        }
      }).catch(()=> {throw new AppMessage("Error ao atualizar Access Authorization.")})

      await prismaInstance.prisma().register_user.update({
        where: {id: access.register_user_id},
        data: {
          active: true,
          start_date: access.approval_date,
          last_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao atualiza acesso ao usuário.")});

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(access_id: number) {
    return await prismaInstance.prisma().register_access_authorization.findUnique({
      where: { id: access_id} })
      .catch(()=> {throw new AppMessage("Error ao pegar Access Authorization.")})
  }

  async delete(access_id: number): Promise<void> {
    try {    
      await prismaInstance.prisma().register_access_authorization.delete({
        where: {id: access_id}
      }).catch(() => {throw new Error('Error ao deletar Access Authorization.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async checkIds({register_entity_id,register_permission_id, register_user_id }: AccessAuthorizationDTO) {

    const [entity, permission, person] = await Promise.all([
      prismaInstance.prisma().register_entity.findUnique({ where: { id: register_entity_id } }),
      prismaInstance.prisma().register_permission.findUnique({ where: { id: register_permission_id } }),
      prismaInstance.prisma().register_user.findUnique({ where: { id: register_user_id } })
    ])

    const result = { entity, permission, person }
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if(!result[table as keyof typeof result])  errors.push(`ID da tabela ${table} incorreto.`);
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }

  private async checkUser(user_id: number) {
    const user = await prismaInstance.prisma().register_user.findUnique({
      where: {id: user_id}
    }).catch(() => {throw new Error('Error ao pegar Access Authorization para deletar/editar.')});

    if(!user) throw new Error('Usuário não encontrada');
    if(user.active) throw new Error("Usuário já autorizado.");
 }
}

export default new AccessAuthorizationService();