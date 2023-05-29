import { Router } from "express";
import organizationChartController from "../controllers/OrganizationChartContoller.js";
const organizationChart = Router();
organizationChart.post("/", organizationChartController.registerOrganizationChart);
organizationChart.put("/", organizationChartController.updateOrganizationChart);
organizationChart.post("/resp", organizationChartController.registerOrganizationChartResp);
organizationChart.put("/resp", organizationChartController.updateOrganizationChartResp);
organizationChart.post("/config", organizationChartController.registerOrganizationChartConfig);
organizationChart.post("/background", organizationChartController.registerBackgroundType);
export default organizationChart;
//# sourceMappingURL=organizationChart.router.js.map