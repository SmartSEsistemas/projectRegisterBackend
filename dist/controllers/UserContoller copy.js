import userService from "../services/person/UserService.js";
import { AppError } from "../helper/AppError.js";
class UserController {
    async login(req, res) {
        const result = await userService.token(req.body);
        return res.status(201).json(result);
    }
    async personRecord(req, res) {
        if (!req.user)
            throw new AppError('Token incorreto ou inválido');
        const result = await userService.record(req.user);
        return res.status(200).json({ user: result });
    }
    async update(req, res) {
        if (!req.user)
            throw new AppError('Token incorreto ou inválido');
        const result = await userService.update(req.user, req.body);
        return res.status(200).json(result);
    }
}
export default new UserController();
//# sourceMappingURL=UserContoller%20copy.js.map