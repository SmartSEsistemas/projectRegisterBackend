import { AppMessage } from "../../../utils/AppMessage.js";
import { accessAuthorizationSchema } from "../../../dto/access/accessAuthorization/AccessAuthorizationDTO.js";
import accessAuthorizationService from "../../../services/access/accessAuthorization/AccessAuthorizationService.js";
class AccessAuthorizationController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = accessAuthorizationSchema.parse(body);
        await accessAuthorizationService.create(data, user.user_id);
        return res.status(201).json(new AppMessage("Autorização de acessos cadastrada com sucesso.", 201));
    }
    async update({ params, body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const data = accessAuthorizationSchema.parse(body);
        await accessAuthorizationService.update(data, user.user_id, Number(params.id));
        return res.status(200).json(new AppMessage("Autorização de acessos atualizada com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await accessAuthorizationService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await accessAuthorizationService.delete(Number(params.id));
        return res.status(200).json(new AppMessage("Autorização de acessos deletada com sucesso.", 200));
    }
}
export default new AccessAuthorizationController();
//# sourceMappingURL=AccessAuthorizationController.js.map