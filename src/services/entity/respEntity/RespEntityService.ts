import prismaInstance from '../../../prisma/client.js'
import { RespEntityDTO } from "../../../dto/entity/resp/RespEntityDTO.js";
import { AppMessage } from "../../../utils/AppMessage.js";
import { RespEntityUpdateDTO } from '../../../dto/entity/resp/RespEntityUpdateDTO.js';

class RespEntityService {
  async create(respEntity: RespEntityDTO, user_id: number): Promise<void> {
    try {
      await this.checkIds(respEntity, respEntity.register_entity_id);
      if (await this.findRespEntity(respEntity)) throw new Error("Responsável da entidade já cadastrada.");

      await prismaInstance.prisma().register_resp_entity.create({
        data: {
          ...respEntity,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar Responsável da entidade.")});

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }


  async update({reason, resp_entity}: RespEntityUpdateDTO, user_id: number, entity_id: number, start_date: string): Promise<void> {
    
    try {
      await this.checkIds(resp_entity, resp_entity.register_entity_id);
      await this.checkRespEntity(entity_id, start_date)
      
      if(!await prismaInstance.prisma().register_natural_person.findUnique({
        where: {id: reason.register_resp_entity_id}
      })) throw new Error("ID passado no motivo não existe.");
      
      await prismaInstance.prisma().register_resp_entity.update({
        where: { register_entity_id_start_date: {register_entity_id: entity_id, start_date} },
        data: {
         ...resp_entity,
         last_user: user_id,
         Register_change_resp_entity: {
          create: {
            ...reason, 
            first_user: user_id,
          }
         }

        },
      }).catch(()=> {throw new Error("Error ao atualizar Responsável da entidade")});

    } catch (error: any) {
      
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }
  
  async get( register_entity_id: number, start_date: string) {
    return await prismaInstance.prisma().register_resp_entity.findUnique({
      where: { register_entity_id_start_date: {register_entity_id, start_date} } })
      .catch(()=> {throw new AppMessage("Error ao pegar Responsável da entidade.")})
  }

  async delete(register_entity_id: number, start_date: string): Promise<void> {
    try {
      await this.checkRespEntity(register_entity_id, start_date);
      
      await prismaInstance.prisma().register_resp_entity.delete({
        where:{ register_entity_id_start_date: {register_entity_id, start_date} }
      }).catch(() => {throw new Error('Error ao deletar Responsável da entidade.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async checkRespEntity(register_entity_id: number, start_date: string) {
    const respEntity = await prismaInstance.prisma().register_resp_entity.findUnique({
      where: { register_entity_id_start_date: {register_entity_id, start_date} },
      include: {
        Register_natural_person: true,
        Register_entity: true
      } 
    }).catch(() => {throw new Error('Error ao pegar Responsável da entidade para deletar/editar.')});

    if(!respEntity) throw new Error('Responsável da entidade não encontrada')
    if(respEntity.Register_natural_person || respEntity.Register_entity) throw new Error("Responsável da entidade não pode ser deletada/editada pois já foi referenciada.");
  }

  private async findRespEntity({ start_date, register_entity_id}: RespEntityDTO) {
    return await prismaInstance.prisma().register_resp_entity.findUnique({ where: { register_entity_id_start_date: {start_date, register_entity_id} }});
  }


  private async checkIds({register_entity_id, register_natural_person_id}: RespEntityDTO, entity_id: number): Promise<void> {
    const [entity, naturalPerson] = await Promise.all([
      prismaInstance.prisma().register_entity.findUnique({where: {id: register_entity_id}}),
      prismaInstance.prisma().register_natural_person.findUnique({where: {id: register_natural_person_id}})
    ]);

    const result = { naturalPerson, entity }
    const errors: string[] = [];
    Object.keys(result).forEach((table) => {
      if(!result[table as keyof typeof result])  errors.push(`ID da tabela ${table} incorreto.`);
    })

    if(errors.length) throw new AppMessage(errors, 404);
  }
}

export default new RespEntityService();