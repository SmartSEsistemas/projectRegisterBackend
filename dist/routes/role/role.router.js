import { Router } from "express";
import roleController from "../../controllers/role/RoleController.js";
const roleRouter = Router();
roleRouter.post("/", roleController.register);
roleRouter.post("/user_role", roleController.registerUserRole);
export default roleRouter;
//# sourceMappingURL=role.router.js.map