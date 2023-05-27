import { NextFunction, Request, RequestHandler, Response } from "express";
import multer from "multer";
import { extname } from "path";
import { AppMessage } from "../utils/AppMessage.js";

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
  return (req: Request, res: Response, next: NextFunction) => {
    upload.single('photo')(req, res, function (err) {
      if (err instanceof multer.MulterError) throw new AppMessage('Error ao salvar a foto.');
      else if (err) throw new AppMessage('Error ao salvar a foto.');
      else {
        if (photoRequired && !req.file) res.status(400).json({ error: 'Missing photo.' });
        else next();
      }
    });
  }
}


