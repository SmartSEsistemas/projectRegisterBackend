import { Router } from "express";
import legalPersonController from "../../controllers/LegalPersonController.js";
import authentication from "../../middlewares/Authentication.js";
import { photoMiddleware } from "../../middlewares/uploadPhoto.js";
const legalPersonRoutes = Router();
legalPersonRoutes.post("/", photoMiddleware(true), legalPersonController.register);
legalPersonRoutes.put("/", authentication.required, photoMiddleware(), legalPersonController.update);
export default legalPersonRoutes;
//# sourceMappingURL=legalPerson.router.js.map