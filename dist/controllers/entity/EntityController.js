import { AppMessage } from '../../utils/AppMessage.js';
import entityService from '../../services/entity/EntityService.js';
import { entitySchema } from '../../dto/entity/EntityDTO.js';
class EntityController {
    async register({ file, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = entitySchema.parse(body);
        await entityService.create(data, user.user_id, file);
        return res.status(201).json(new AppMessage('Entidade cadastrada com sucesso.', 201));
    }
    async update({ file, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = entitySchema.parse(body);
        await entityService.update(data, user.user_id, file);
        return res.status(200).json(new AppMessage('Entidade atualizada com sucesso.', 200));
    }
    async show(req, res) {
        const result = await entityService.get();
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await entityService.delete(Number(params.id));
        return res.status(200).json(new AppMessage('Entidade deletada com sucesso.', 200));
    }
}
export default new EntityController();
//# sourceMappingURL=EntityController.js.map