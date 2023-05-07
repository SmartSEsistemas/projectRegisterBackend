import { Router } from "express";
import roleController from "../controllers/RoleController.js";

const roleRouter = Router();

roleRouter.post("/", roleController.register);
roleRouter.post("/user_role", roleController.registerUserRole);


export default roleRouter;