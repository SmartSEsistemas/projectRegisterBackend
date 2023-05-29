import { Router } from "express";
import roleController from "../controllers/RoleController.js";
const permissionRouter = Router();
permissionRouter.post("/", roleController.register);
permissionRouter.post("/user_role", roleController.registerUserRole);
export default permissionRouter;
//# sourceMappingURL=role.router%20copy.js.map