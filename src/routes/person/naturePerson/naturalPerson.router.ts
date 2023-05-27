import { Router } from "express";
import naturalPersonController from "../../../controllers/person/naturalPerson/NaturalPersonController.js";
import authentication from "../../../middlewares/Authentication.js";
import { photoMiddleware } from "../../../middlewares/uploadPhoto.js";

const naturalPersonRoutes = Router()

naturalPersonRoutes.post("/", photoMiddleware(), naturalPersonController.register);
naturalPersonRoutes.put("/", photoMiddleware(), naturalPersonController.update);
naturalPersonRoutes.get("/:cpf", naturalPersonController.show);
naturalPersonRoutes.delete("/:cpf", naturalPersonController.delete);


export default naturalPersonRoutes;