import { Router } from "express";
import respEntityController from "../../../../controllers/entity/respEntity/RespEntityController.js";

const respEntityRouter = Router();

respEntityRouter.post("/", respEntityController.register);
respEntityRouter.put("/:start_date", respEntityController.update);
respEntityRouter.get("/:start_date", respEntityController.show);
respEntityRouter.delete("/:start_date", respEntityController.delete);

export default respEntityRouter;