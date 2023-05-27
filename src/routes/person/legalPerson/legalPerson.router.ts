import { Router } from "express";
import legalPersonController from "../../../controllers/person/legalPerson/LegalPersonController.js";
import authentication from "../../../middlewares/Authentication.js";
import { photoMiddleware } from "../../../middlewares/uploadPhoto.js";

const legalPersonRoutes = Router();

legalPersonRoutes.post("/", photoMiddleware(), legalPersonController.register);
legalPersonRoutes.put("/", authentication.required, photoMiddleware(), legalPersonController.update);
legalPersonRoutes.get("/:cnpj", authentication.required, legalPersonController.show);
legalPersonRoutes.delete("/:cnpj", authentication.required, legalPersonController.delete);

export default legalPersonRoutes;