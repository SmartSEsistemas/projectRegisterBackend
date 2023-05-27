import { Router } from "express";
import entityTypeController from "../../../../controllers/entity/entityType/EntityTypeController.js";

const entityTypeRouter = Router();

entityTypeRouter.post("/", entityTypeController.register);
entityTypeRouter.put("/:id", entityTypeController.update);
entityTypeRouter.get("/:id", entityTypeController.show);
entityTypeRouter.delete("/:id", entityTypeController.delete);

export default entityTypeRouter;