import userService from "../../services/user/UserService.js";
import { AppMessage } from "../../utils/AppMessage.js";
import { loginUserSchema } from "../../dto/user/LoginUserDTO.js";
class UserController {
    async login(req, res) {
        const data = loginUserSchema.parse(req.body);
        const result = await userService.token(data);
        return res.status(201).json(result);
    }
    async personRecord(req, res) {
        if (!req.user)
            throw new AppMessage('Token incorreto ou inválido');
        const result = await userService.record(req.user);
        return res.status(200).json({ user: result });
    }
    async update(req, res) {
        if (!req.user)
            throw new AppMessage('Token incorreto ou inválido');
        const result = await userService.update(req.user, req.body);
        return res.status(200).json(result);
    }
}
export default new UserController();
//# sourceMappingURL=UserContoller.js.map