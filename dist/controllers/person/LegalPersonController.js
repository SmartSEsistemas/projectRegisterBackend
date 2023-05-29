import legalPersonService from "../../services/person/LegalPersonService.js";
import { AppMessage } from "../../utils/AppMessage.js";
import { legalPersonSchema } from "../../dto/person/legal/LegalPersonDTO.js";
import { legalPersonUpdadeSchema } from "../../dto/person/legal/LegalPersonUpdateDTO.js";
class LegalPersonController {
    async register({ file, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = legalPersonSchema.parse(JSON.parse(body.data));
        await legalPersonService.create(data, user.user_id, user.entity_id, file);
        return res.status(201).json(new AppMessage("Pessoa jurídica cadastrada com sucesso.", 201));
    }
    async update({ user, body, file }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = legalPersonUpdadeSchema.parse(JSON.parse(body.data));
        await legalPersonService.update(data, user.user_id, user.entity_id, file);
        return res.status(200).json(new AppMessage("Pessoa jurídica atualizada com sucesso.", 200));
    }
    async show({ user, params }, res) {
        if (!params.cnpj)
            throw new AppMessage('CNPJ não informado.');
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const result = await legalPersonService.get(params.cnpj, user.entity_id);
        return res.status(200).json(result);
    }
    async delete({ user, params }, res) {
        if (!params.cnpj)
            throw new AppMessage('CPF não informado.');
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        await legalPersonService.delete(params.cnpj, user.entity_id);
        return res.status(200).json(new AppMessage("Pessoa jurídica deleteda com sucesso.", 200));
    }
}
export default new LegalPersonController();
//# sourceMappingURL=LegalPersonController.js.map