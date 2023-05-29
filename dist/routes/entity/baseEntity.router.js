import { Router } from "express";
import entityRouter from "./entity/entity.router.js";
import legalNatureRouter from "./entity/legalNature/legalNature.router.js";
import entityTypeRouter from "./entity/entityType/entityType.router.js";
import respEntityRouter from "./entity/respEntity/entityType.router.js";
const baseEntityRouter = Router();
baseEntityRouter.use("/", entityRouter);
baseEntityRouter.use("/legal_natural", legalNatureRouter);
baseEntityRouter.use("/entity_type", entityTypeRouter);
baseEntityRouter.use("/resp_entity", respEntityRouter);
export default baseEntityRouter;
//# sourceMappingURL=baseEntity.router.js.map