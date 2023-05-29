import { AppMessage } from "../../../utils/AppMessage.js";
import userService from "../../../services/access/user/UserService.js";
import { userSchema } from "../../../dto/access/user/UserDTO.js";
import { userUpdateSchema } from "../../../dto/access/user/UserUpdateDTO.js";
class UserController {
    async register({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = userSchema.parse(body);
        await userService.create(data, user.user_id, user.entity_id);
        return res.status(201).json(new AppMessage("Usuário cadastrada com sucesso.", 201));
    }
    async update({ body, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        const data = userUpdateSchema.parse(body);
        await userService.update(data, user.user_id, user.entity_id);
        return res.status(200).json(new AppMessage("Usuário atualizada com sucesso.", 200));
    }
    async show({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        const result = await userService.get(Number(params.id));
        return res.status(200).json(result);
    }
    async delete({ params, user }, res) {
        if (!user)
            throw new AppMessage('Token incorreto ou inválido');
        if (!params.id || !Number(params.id))
            throw new AppMessage('ID não informado ou incorreto.');
        await userService.delete(Number(params.id), user.entity_id);
        return res.status(200).json(new AppMessage("Usuário deletada com sucesso.", 200));
    }
}
export default new UserController();
//# sourceMappingURL=UserController.js.map