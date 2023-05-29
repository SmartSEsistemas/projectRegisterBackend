import { Router } from "express";
import entityController from "../../../../controllers/entity/EntityController.js";
import { permission } from "../../../../middlewares/permissions.js";
const entityRouter = Router();
entityRouter.post("/", permission(["create_entity"]), entityController.register);
entityRouter.put("/", permission(["update_entity"]), entityController.update);
entityRouter.get("/:id", permission(["get_entity"]), entityController.show);
entityRouter.delete("/:id", permission(["delete_entity"]), entityController.delete);
export default entityRouter;
//# sourceMappingURL=entity.router.js.map