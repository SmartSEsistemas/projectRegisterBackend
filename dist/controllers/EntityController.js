import { AppError } from "../helper/AppError.js";
import entityService from "../services/EntityService.js";
class EntityController {
    async registerUf({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createUf(body);
        return res.status(201).json({ result: "Uf criada" });
    }
    async registerCounty({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createCounty(body);
        return res.status(201).json({ result: "Municipio criada." });
    }
    async registerLegalNatural({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createLegalNature(body);
        return res.status(201).json({ result: "Natureza jurídica criada." });
    }
    async registerAdminType({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createAdminType(body);
        return res.status(201).json({ result: "Tipo de administrador criada." });
    }
    async registerEntityType({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createEntityType(body);
        return res.status(201).json({ result: "Tipo de entidade criada." });
    }
    async registerEntity({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createEntity(body);
        return res.status(201).json({ result: "Entidade criada." });
    }
    async registerRespEntity({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.createRespEntity(body);
        return res.status(201).json({ result: "Responsabilidade da entidade criada." });
    }
    async updateRespEntity({ body }, res) {
        if (!body)
            throw new AppError('Informações não enviadas');
        await entityService.updateRespEntity(body);
        return res.status(200).json({ result: "Responsabilidade da entidade atualizada." });
    }
}
export default new EntityController();
//# sourceMappingURL=EntityController.js.map