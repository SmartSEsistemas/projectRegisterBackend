class RecoverPasswordController {
    async revocer(req, res) {
        const data = loginUserSchema.parse(req.body);
        const result = await userService.token(data);
        return res.status(201).json(result);
    }
}
export default new RecoverPasswordController();
//# sourceMappingURL=RecoverContoller.js.map