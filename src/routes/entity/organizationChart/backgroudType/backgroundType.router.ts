import { Router } from "express";
import backgroundTypeController from "../../../../controllers/organizationChart/backgroundType/BackgroundTypeController.js";
import { permission } from "../../../../middlewares/permissions.js";

const backgroundTypeRouter = Router();

backgroundTypeRouter.post("/", permission(["create_background_type"]), backgroundTypeController.register);
backgroundTypeRouter.put("/:id", permission(["update_background_type"]), backgroundTypeController.update);
backgroundTypeRouter.get("/:id", permission(["get_background_type"]), backgroundTypeController.show);
backgroundTypeRouter.delete("/:id", permission(["delete_background_type"]), backgroundTypeController.delete);

export default backgroundTypeRouter;