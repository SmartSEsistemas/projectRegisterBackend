import { Router } from "express";
import entityController from "../../../controllers/entity/EntityController.js";
const entityRouter = Router();
entityRouter.post("/", entityController.register);
entityRouter.put("/", entityController.update);
entityRouter.get("/:id", entityController.show);
entityRouter.delete("/:id", entityController.delete);
export default entityRouter;
//# sourceMappingURL=entity.router.js.map