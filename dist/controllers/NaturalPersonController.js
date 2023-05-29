import naturalPersonService from '../services/person/NaturalPersonService.js';
import { AppError } from "../helper/AppError.js";
class NaturalPersonController {
    async register({ file, body }, res) {
        if (!file || !body.data)
            throw new AppError('Informações não enviadas');
        const result = await naturalPersonService.create(JSON.parse(body.data), file);
        return res.status(201).json(result);
    }
    async update({ user, body, file }, res) {
        if (!user || !body.data)
            throw new AppError('Token incorreto ou inválido');
        const result = await naturalPersonService.update(user, JSON.parse(body.data), file);
        return res.status(200).json(result);
    }
}
export default new NaturalPersonController();
//# sourceMappingURL=NaturalPersonController.js.map