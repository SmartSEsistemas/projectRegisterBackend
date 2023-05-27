import { Router } from "express";
import adminTypeRouter from "./adminType/adminType.router.js";
import backgroundTypeRouter from "./backgroudType/backgroundType.router.js";
import configOrganizationChartRouter from "./config/configOrganizationChart.router.js";
import organizationChartRouter from "./organizationChart/organizationChart.router.js";
import organizationChartRespRouter from "./resp/organizationChartResp.router.js";

const baseOrganizationChart = Router();

baseOrganizationChart.use("/background_type", backgroundTypeRouter);
baseOrganizationChart.use("/config", configOrganizationChartRouter);
baseOrganizationChart.use("/", organizationChartRouter);
baseOrganizationChart.use("/resp", organizationChartRespRouter);
baseOrganizationChart.use("/admin_type", adminTypeRouter);

export default baseOrganizationChart;