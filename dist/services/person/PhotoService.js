import prismaInstance from '../../prisma/client.js';
import { AppError } from '../../helper/AppError.js';
class PhotoService {
    async save(req) {
        console.log(JSON.parse(req.body.data).document);
        return await prismaInstance.prisma().photo.create({
            data: {
                name_photo: req.file?.filename,
                url: `${req.protocol}://${req.hostname}${req.file?.filename}`
            }
        })
            .then((photo) => ({ name_photo: photo.name_photo }))
            .catch(() => { throw new AppError('Error ao cadastrar foto.'); });
    }
}
export default new PhotoService();
//# sourceMappingURL=PhotoService.js.map