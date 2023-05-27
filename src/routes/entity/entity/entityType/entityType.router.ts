import { Router } from "express";
import entityTypeController from "../../../../controllers/entity/entityType/EntityTypeController.js";
import { permission } from "../../../../middlewares/permissions.js";

const entityTypeRouter = Router();

entityTypeRouter.post("/", permission(["create_entity_type"]),  entityTypeController.register);
entityTypeRouter.put("/:id", permission(["update_entity_type"]),  entityTypeController.update);
entityTypeRouter.get("/:id", permission(["get_entity_type"]),  entityTypeController.show);
entityTypeRouter.delete("/:id", permission(["delete_entity_type"]), entityTypeController.delete);

export default entityTypeRouter;