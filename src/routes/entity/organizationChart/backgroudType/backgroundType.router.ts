import { Router } from "express";
import backgroundTypeController from "../../../../controllers/organizationChart/backgroundType/BackgroundTypeController.js";

const backgroundTypeRouter = Router();

backgroundTypeRouter.post("/", backgroundTypeController.register);
backgroundTypeRouter.put("/:id", backgroundTypeController.update);
backgroundTypeRouter.get("/:id", backgroundTypeController.show);
backgroundTypeRouter.delete("/:id", backgroundTypeController.delete);

export default backgroundTypeRouter;