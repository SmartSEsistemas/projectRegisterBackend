import { AppMessage } from "../../utils/AppMessage.js";
import entityService from "../../services/entity/EntityService.js";
import { entitySchema } from "../../dto/entity/EntityDTO.js";
class LegalNatureController {
    async register({ file, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = entitySchema.parse(body);
        await entityService.create(data, user.user_id, file);
        return res.status(201).json(new AppMessage("Entidade cadastrada com sucesso.", 201));
    }
    async update({ file, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = entitySchema.parse(body);
        await entityService.update(data, user.user_id, file);
        return res.status(200).json(new AppMessage("Entidade atualizada com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await entityService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await entityService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Entidade deleteda com sucesso.", 200));
    }
    async registerUf({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.createUf(body);
        return res.status(201).json({ result: "Uf criada" });
    }
    async registerCounty({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.createCounty(body);
        return res.status(201).json({ result: "Municipio criada." });
    }
    async registerLegalNatural({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.createLegalNature(body);
        return res.status(201).json({ result: "Natureza jurídica criada." });
    }
    async registerAdminType({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.createAdminType(body);
        return res.status(201).json({ result: "Tipo de administrador criada." });
    }
    async registerEntityType({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.createEntityType(body);
        return res.status(201).json({ result: "Tipo de entidade criada." });
    }
    async registerRespEntity({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.createRespEntity(body);
        return res.status(201).json({ result: "Responsabilidade da entidade criada." });
    }
    async updateRespEntity({ body }, res) {
        if (!body)
            throw new AppMessage('Informações não enviadas');
        await entityService.updateRespEntity(body);
        return res.status(200).json({ result: "Responsabilidade da entidade atualizada." });
    }
}
export default new LegalNatureController();
//# sourceMappingURL=EntityController.js.map