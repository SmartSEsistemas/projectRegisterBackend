import { Router } from "express";
import naturalPersonController from "../../controllers/NaturalPersonController.js";
import authentication from "../../middlewares/Authentication.js";
import { photoMiddleware } from "../../middlewares/uploadPhoto.js";
const naturalPersonRoutes = Router();
naturalPersonRoutes.post("/", photoMiddleware(true), naturalPersonController.register);
naturalPersonRoutes.put("/", authentication.required, photoMiddleware(), naturalPersonController.update);
export default naturalPersonRoutes;
//# sourceMappingURL=naturalPerson.router.js.map