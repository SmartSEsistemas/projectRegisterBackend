import { Router } from "express";
import permissionController from "../controllers/PermissionController.js";
const permissionRouter = Router();
permissionRouter.post("/", permissionController.register);
permissionRouter.post("/role_permission", permissionController.registerRolePermission);
export default permissionRouter;
//# sourceMappingURL=permission.router.js.map