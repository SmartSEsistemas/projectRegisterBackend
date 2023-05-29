import { Router } from "express";
import baseEntityRouter from "./entity/baseEntity.router.js";
import baseOrganizationChart from "./organizationChart/baseOrganizationChart.router.js";
const baseEntityModuleRouter = Router();
baseEntityModuleRouter.use("/", baseEntityRouter);
baseEntityModuleRouter.use("/organization_config", baseOrganizationChart);
export default baseEntityModuleRouter;
//# sourceMappingURL=baseEntityModule.router.js.map