import { EntityTypeDTO } from '../../../dto/entity/EntityTypeDTO.js';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';

class EntityTypeService {

  async create(entityType: EntityTypeDTO, user_id: number) {
    try {
      
      if(await this.findEntityType(entityType)) throw new Error("Tipo de entidade já cadastrada.");
      
      await prismaInstance.prisma().register_entity_type.create({
        data: {
          ...entityType,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar Tipo de entidade.")});

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(entityType: EntityTypeDTO, user_id: number, entityType_id: number) {
    try {

      await this.checkEntityType(entityType_id);

      await prismaInstance.prisma().register_entity_type.update({
        where: {id: entityType_id},
        data: {
          ...entityType,
          last_user: user_id
        }
      }).catch(()=> {throw new AppMessage("Error ao atualizar Tipo de entidade.")})

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(entityType_id: number) {
    return await prismaInstance.prisma().register_entity_type.findUnique({
      where: { id: entityType_id} })
      .catch(()=> {throw new AppMessage("Error ao pegar Tipo de entidade.")})
  }

  async delete(entityType_id: number): Promise<void> {
    try {
      await this.checkEntityType(entityType_id);

      await prismaInstance.prisma().register_entity_type.delete({
        where: {id: entityType_id}
      }).catch(() => {throw new Error('Error ao deletar Tipo de entidade.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async findEntityType({description, nb_tce} : EntityTypeDTO) {
    return await prismaInstance.prisma().register_entity_type.findUnique({
      where: {description_nb_tce: {description, nb_tce}}
    }).catch(()=> {throw new Error("Error ao procurar Tipo de entidade.")});
  }

  private async checkEntityType(id: number) {
    const entityType = await prismaInstance.prisma().register_entity_type.findUnique({
      where: {id},
      select: {
        Register_entity: true
      }
    }).catch(() => {throw new Error('Error ao pegar Tipo de entidade para deletar/editar.')});

    if(!entityType) throw new Error('Tipo de entidade não encontrada');
    if(entityType.Register_entity.length > 0 ) throw new Error("Tipo de entidade não pode ser deletada/editada pois já foi referenciada.");
  }
}

export default new EntityTypeService();