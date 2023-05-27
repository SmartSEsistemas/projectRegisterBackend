import { Router } from "express";
import organizationChartController from "../../../../controllers/organizationChart/OrganizationChartController.js";

const organizationChartRouter = Router();

organizationChartRouter.post("/", organizationChartController.register);
organizationChartRouter.put("/:id", organizationChartController.update);
organizationChartRouter.get("/:id", organizationChartController.show);
organizationChartRouter.delete("/:id", organizationChartController.delete);

export default organizationChartRouter;