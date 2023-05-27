import { Router } from "express";
import organizationChartController from "../../../../controllers/organizationChart/OrganizationChartController.js";
import { permission } from "../../../../middlewares/permissions.js";

const organizationChartRouter = Router();

organizationChartRouter.post("/", permission(["create_organization_chart"]), organizationChartController.register);
organizationChartRouter.put("/:id", permission(["update_organization_chart"]), organizationChartController.update);
organizationChartRouter.get("/:id", permission(["get_organization_chart"]), organizationChartController.show);
organizationChartRouter.delete("/:id", permission(["delete_organization_chart"]), organizationChartController.delete);

export default organizationChartRouter;