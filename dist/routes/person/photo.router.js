import { Router } from "express";
import PhotoController from "../../controllers/PhotoController.js";
import { upload } from "../../middlewares/uploadPhoto.js";
const photoRoutes = Router();
photoRoutes.post("/", upload.single('photo'), PhotoController.upload);
export default photoRoutes;
//# sourceMappingURL=photo.router.js.map