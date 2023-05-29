import { AppError } from "../helper/AppError.js";
import photoService from "../services/person/PhotoService.js";
class PhotoController {
    async upload(req, res) {
        if (!req.file)
            throw new AppError('Foto não enviada.');
        const result = await photoService.save(req);
        return res.status(201).json(result);
    }
}
export default new PhotoController();
//# sourceMappingURL=PhotoController.js.map