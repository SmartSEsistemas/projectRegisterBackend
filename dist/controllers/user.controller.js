class UserController {
    async register(req, res) {
        console.log('controler');
        return res.status(201).json({ result: 'ok' });
    }
}
export default new UserController();
//# sourceMappingURL=user.controller.js.map