import { Router } from "express";
import entityController from "../controllers/EntityController.js";
const entityRouter = Router();
entityRouter.post("/", entityController.registerEntity);
entityRouter.post("/uf", entityController.registerUf);
entityRouter.post("/county", entityController.registerCounty);
entityRouter.post("/legal_natural", entityController.registerLegalNatural);
entityRouter.post("/admin_type", entityController.registerAdminType);
entityRouter.post("/entity_type", entityController.registerEntityType);
entityRouter.post("/resp_entity", entityController.registerRespEntity);
entityRouter.put("/resp_entity", entityController.updateRespEntity);
export default entityRouter;
//# sourceMappingURL=entity.router.js.map