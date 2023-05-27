import { Router } from "express";
import respEntityController from "../../../../controllers/entity/respEntity/RespEntityController.js";
import { permission } from "../../../../middlewares/permissions.js";

const respEntityRouter = Router();

respEntityRouter.post("/", permission(["create_resp_entity"]),  respEntityController.register);
respEntityRouter.put("/:start_date", permission(["update_resp_entity"]),  respEntityController.update);
respEntityRouter.get("/:start_date", permission(["get_resp_entity"]),  respEntityController.show);
respEntityRouter.delete("/:start_date", permission(["delete_resp_entity"]), respEntityController.delete);

export default respEntityRouter;