import { AppError } from "../helper/AppError.js";
import prismaInstance from '../prisma/client.js';
class EntityService {
    async createUf(body) {
        await prismaInstance.prisma().uf.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar UF"); });
    }
    async createCounty(body) {
        const uf = await prismaInstance.prisma().uf.findUnique({ where: { id: body.uf_id } });
        if (!uf)
            throw new AppError("Uf informada não cadastrada.");
        await prismaInstance.prisma().county.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar UF"); });
    }
    async createLegalNature(body) {
        await prismaInstance.prisma().legal_nature.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar natureza legal"); });
    }
    async createAdminType(body) {
        await prismaInstance.prisma().register_admin_type.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar Tipo de administrador"); });
    }
    async createEntityType(body) {
        await prismaInstance.prisma().register_entity_type.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar Tipo de entidade"); });
    }
    async createEntity(body) {
        try {
            const [person, county, entityType, legalNature] = await Promise.all([
                prismaInstance.prisma().register_legal_person.findUnique({ where: { id: body.legal_person_id } }),
                prismaInstance.prisma().county.findUnique({ where: { id: body.county_id } }),
                prismaInstance.prisma().register_entity_type.findUnique({ where: { id: body.entity_type_id } }),
                prismaInstance.prisma().legal_nature.findUnique({ where: { id: body.legal_nature_id } }),
            ]);
            if (!person || !county || !entityType || !legalNature)
                throw new Error("Error ao criar uma entidade.");
            await prismaInstance.prisma().register_entity.create({ data: body });
        }
        catch (error) {
            new AppError(error.message);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async createRespEntity(body) {
        await prismaInstance.prisma().register_resp_entity.create({ data: body })
            .catch(() => { throw new AppError("Error ao criar responsabilidade da entidade."); });
    }
    async updateRespEntity({ resp_entity, resp_entity_id, reason }) {
        await prismaInstance.prisma().register_resp_entity.update({
            where: { id: resp_entity_id },
            data: {
                ...resp_entity,
                Register_change_resp_entity: {
                    create: reason
                }
            },
        })
            .catch(() => { throw new AppError("Error ao atualizar responsabilidade da entidade."); });
    }
}
export default new EntityService();
//# sourceMappingURL=EntityService.js.map