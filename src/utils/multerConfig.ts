// import multer from "multer";
// import { extname } from "path";


// const storage = multer.diskStorage({
//   destination: './upload/images',
//   filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
//     cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname));
//   }
// });

// const fileFilter = (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//     return cb(new Error('Somente imagens são permitidas.'), false);
//   }
//   cb(null, true);
// };

// const upload = multer({ storage, fileFilter });