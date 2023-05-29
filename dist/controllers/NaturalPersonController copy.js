import naturalPersonService from '../services/person/NaturalPersonService.js';
class NaturalPersonController {
    async register(req, res) {
        const result = await naturalPersonService.create(req.body);
        return res.status(201).json(result);
    }
    async update(req, res) {
        const result = await naturalPersonService.update(req.body);
        return res.status(201).json(result);
    }
    async test(req, res) {
        const result = await naturalPersonService.get(req.body.cpf);
        return res.status(201).json(result);
    }
}
export default new NaturalPersonController();
//# sourceMappingURL=NaturalPersonController%20copy.js.map