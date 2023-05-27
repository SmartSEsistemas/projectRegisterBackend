import { LegalNatureDTO } from '../../../dto/entity/legalNature/LegalNatureDTO.js';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';

class LegalNatureService {
  async create(legalNature: LegalNatureDTO, user_id: number) {
    try {
      await prismaInstance.prisma().register_legal_nature.create({
        data: {
          ...legalNature,
          first_user: user_id
        }
      }).catch(()=> {throw new Error("Error ao cadastrar natureza jurídica.")});
    } catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async update(legalNature: LegalNatureDTO, user_id: number, legalNature_id: number) {
    try {
      await this.checkLegalNature(legalNature_id);

      await prismaInstance.prisma().register_legal_nature.update({
        where: {id: legalNature_id},
        data: {
          ...legalNature,
          last_user: user_id
        }
      }).catch(()=> {throw new AppMessage("Error ao atualizar natureza jurídica.")})

    } catch (error: any) {
      if(error instanceof AppMessage) throw new AppMessage(error.Message, error.Status_code);
      else throw new AppMessage(error, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }
  }

  async get(legalNature_id: number) {
    return await prismaInstance.prisma().register_legal_nature.findUnique({
      where: { id: legalNature_id} })
      .catch(()=> {throw new AppMessage("Error ao pegar natureza jurídica.")})
  }

  async delete(legalNature_id: number): Promise<void> {
    try {
      await this.checkLegalNature(legalNature_id);

      await prismaInstance.prisma().register_legal_nature.delete({
        where: {id: legalNature_id}
      }).catch(() => {throw new Error('Error ao deletar entidade.')});

    }  catch (error: any) {
      throw new AppMessage(error.message, 400)
    } finally {
      await prismaInstance.prisma().$disconnect();
    }    
  }

  private async checkLegalNature(id: number) {
    const legalNature = await prismaInstance.prisma().register_legal_nature.findUnique({
      where: {id},
      select: {
        Register_entity: true,
        Register_admin_type: true
      }
    }).catch(() => {throw new Error('Error ao pegar Natureza jurídica para deletar/editar.')});

    if(!legalNature) throw new Error('Natureza jurídica não encontrada');
    if(legalNature.Register_entity.length > 0 || legalNature.Register_admin_type.length > 0) throw new Error("Natureza jurídica não pode ser deletada/editada pois já foi referenciada.");
  }
}

export default new LegalNatureService();