import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';
class BackgroundTypeService {
    async create(backgroundType, user_id) {
        try {
            if (await this.findBackgroundType(backgroundType))
                throw new Error("Tipo de fundo já cadastrada.");
            await prismaInstance.prisma().register_background_type.create({
                data: {
                    ...backgroundType,
                    first_user: user_id
                }
            }).catch(() => { throw new Error("Error ao cadastrar tipo de fundo."); });
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
    async update(backgroundType, user_id, backgroundType_id) {
        try {
            await this.checkBackgroundType(backgroundType_id);
            await prismaInstance.prisma().register_background_type.update({
                where: { id: backgroundType_id },
                data: {
                    ...backgroundType,
                    last_user: user_id
                }
            }).catch(() => { throw new AppMessage("Error ao atualizar Tipo de fundo."); });
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
    async get(backgroundType_id) {
        return await prismaInstance.prisma().register_background_type.findUnique({
            where: { id: backgroundType_id }
        })
            .catch(() => { throw new AppMessage("Error ao pegar Tipo de fundo."); });
    }
    async delete(backgroundType_id) {
        try {
            await this.checkBackgroundType(backgroundType_id);
            await prismaInstance.prisma().register_admin_type.delete({
                where: { id: backgroundType_id }
            }).catch(() => { throw new Error('Error ao deletar Tipo de fundo.'); });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async findBackgroundType({ description, nb_tce }) {
        return await prismaInstance.prisma().register_background_type.findUnique({
            where: { description_nb_tce: { description, nb_tce } }
        }).catch(() => { throw new Error("Error ao procurar tipo de fundo."); });
    }
    async checkBackgroundType(id) {
        const backgroundType = await prismaInstance.prisma().register_background_type.findUnique({
            where: { id },
            select: {
                Register_organization_chart: true
            }
        }).catch(() => { throw new Error('Error ao pegar Tipo de fundo para deletar/editar.'); });
        if (!backgroundType)
            throw new Error('Tipo de fundo não encontrada');
        if (backgroundType.Register_organization_chart.length > 0)
            throw new Error("Tipo de fundo não pode ser deletada/editada pois já foi referenciada.");
    }
}
export default new BackgroundTypeService();
//# sourceMappingURL=BackgroundTypeService.js.map