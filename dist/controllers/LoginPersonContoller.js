import userService from "../services/person/UserService.js";
class LoginPersonController {
    async login(req, res) {
        const result = await userService.token(req.body);
        return res.status(201).json(result);
    }
    async personRecord(req, res) {
    }
}
export default new LoginPersonController();
//# sourceMappingURL=LoginPersonContoller.js.map