import { AppMessage } from "../../../utils/AppMessage.js";
import { legalNatureSchema } from "../../../dto/entity/legalNature/LegalNatureDTO.js";
import legalNatureService from "../../../services/entity/legalNature/LegalNatureService.js";
class LegalNatureController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = legalNatureSchema.parse(body);
        await legalNatureService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Natureza jurídica cadastrada com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = legalNatureSchema.parse(body);
        await legalNatureService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Natureza jurídica atualizada com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await legalNatureService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await legalNatureService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Natureza jurídica deletada com sucesso.", 200));
    }
}
export default new LegalNatureController();
//# sourceMappingURL=LegalNatureController.js.map