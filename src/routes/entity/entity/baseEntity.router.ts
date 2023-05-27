import { Router } from "express";
import entityRouter from "./entity/entity.router.js";
import legalNatureRouter from "./legalNature/legalNature.router.js";
import entityTypeRouter from "./entityType/entityType.router.js";
import respEntityRouter from "./respEntity/entityType.router.js";

const baseEntityRouter = Router();


baseEntityRouter.use("/", entityRouter);
baseEntityRouter.use("/legal_natural", legalNatureRouter);
baseEntityRouter.use("/entity_type", entityTypeRouter);
baseEntityRouter.use("/resp_entity", respEntityRouter);

export default baseEntityRouter;