import { Router } from "express";
import roleController from "../../../controllers/access/role/RoleController.js";

const roleRouter = Router();

roleRouter.post("/", roleController.register);
roleRouter.put("/", roleController.update);
roleRouter.get("/:id", roleController.show);
roleRouter.delete("/:id", roleController.delete);


export default roleRouter;