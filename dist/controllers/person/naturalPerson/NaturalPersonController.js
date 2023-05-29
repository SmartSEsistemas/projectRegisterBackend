import naturalPersonService from '../../../services/person/NaturalPersonService.js';
import { AppMessage } from "../../../utils/AppMessage.js";
import { naturalPersonSchema } from '../../../dto/person/natural/NaturalPersonDTO.js';
import { naturalPersonUpdadeSchema } from '../../../dto/person/natural/NaturalPersonUpdateDTO.js';
class NaturalPersonController {
    async register({ file, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = naturalPersonSchema.parse(JSON.parse(body.data));
        await naturalPersonService.create(data, user.user_id, user.entity_id, file);
        return res.status(201).json(new AppMessage("Pessoa física cadastrada com sucesso.", 201));
    }
    async update({ user, body, file }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = naturalPersonUpdadeSchema.parse(JSON.parse(body.data));
        await naturalPersonService.update(data, user.user_id, user.entity_id, file);
        return res.status(200).json(new AppMessage("Pessoa física atualizada com sucesso.", 200));
    }
    async show({ user, params }, res) {
        if (!params.cpf)
            throw new AppMessage('CPF não informado.');
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const result = await naturalPersonService.get(params.cpf, user.entity_id);
        return res.status(200).json(result);
    }
    async delete({ user, params }, res) {
        if (!params.cpf)
            throw new AppMessage('CPF não informado.');
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        await naturalPersonService.delete(params.cpf, user.entity_id);
        return res.status(200).json(new AppMessage("Pessoa física deletada com sucesso.", 200));
    }
}
export default new NaturalPersonController();
//# sourceMappingURL=NaturalPersonController.js.map