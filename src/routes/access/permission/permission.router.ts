import { Router } from "express";
import permissionController from "../../../controllers/access/permission/PermissionController.js";

const permissionRouter = Router();

permissionRouter.post("/", permissionController.register);
permissionRouter.put("/:name", permissionController.update);
permissionRouter.get("/:name", permissionController.show);
permissionRouter.delete("/:name", permissionController.delete);


export default permissionRouter;