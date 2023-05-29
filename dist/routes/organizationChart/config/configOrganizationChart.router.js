import { Router } from "express";
import configOrganizationChartController from "../../../controllers/organizationChart/config/ConfigOrganizationChartController.js";
const configOrganizationChartRouter = Router();
configOrganizationChartRouter.post("/", configOrganizationChartController.register);
configOrganizationChartRouter.put("/:id", configOrganizationChartController.update);
configOrganizationChartRouter.get("/:id", configOrganizationChartController.show);
configOrganizationChartRouter.delete("/:id", configOrganizationChartController.delete);
export default configOrganizationChartRouter;
//# sourceMappingURL=configOrganizationChart.router.js.map