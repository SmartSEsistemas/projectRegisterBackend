import { Router } from "express";
import configOrganizationChartController from "../../../../controllers/organizationChart/config/ConfigOrganizationChartController.js";
import { permission } from "../../../../middlewares/permissions.js";

const configOrganizationChartRouter = Router();

configOrganizationChartRouter.post("/", permission(["create_config_organization_chart"]),  configOrganizationChartController.register);
configOrganizationChartRouter.put("/:id", permission(["update_config_organization_chart"]),  configOrganizationChartController.update);
configOrganizationChartRouter.get("/:id", permission(["get_config_organization_chart"]),  configOrganizationChartController.show);
configOrganizationChartRouter.delete("/:id", permission(["delete_config_organization_chart"]),  configOrganizationChartController.delete);

export default configOrganizationChartRouter;