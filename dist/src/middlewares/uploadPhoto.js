import multer from "multer";
import { extname } from "path";
import { AppError } from "../helper/AppError.js";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname));
    }
});
const upload = multer({ storage });
export const photoMiddleware = (photoRequired = false) => {
    return (req, res, next) => {
        upload.single('photo')(req, res, function (err) {
            if (err instanceof multer.MulterError)
                throw new AppError('Error ao salvar a foto.');
            else if (err)
                throw new AppError('Error ao salvar a foto.');
            else {
                if (photoRequired && !req.file)
                    res.status(400).json({ error: 'Missing photo.' });
                else
                    next();
            }
        });
    };
};
//# sourceMappingURL=uploadPhoto.js.map