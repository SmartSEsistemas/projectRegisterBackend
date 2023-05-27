import { Router } from "express";
import organizationChartRespController from "../../../../controllers/organizationChart/resp/OrganizationChartRespController.js";
const organizationChartRespRouter = Router();

organizationChartRespRouter.post("/", organizationChartRespController.register);
organizationChartRespRouter.put("/:id", organizationChartRespController.update);
organizationChartRespRouter.get("/:id", organizationChartRespController.show);
organizationChartRespRouter.delete("/:id", organizationChartRespController.delete);

export default organizationChartRespRouter;