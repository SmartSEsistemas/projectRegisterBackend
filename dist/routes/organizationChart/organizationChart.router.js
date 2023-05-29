import { Router } from "express";
import adminTypeRouter from "./adminType/adminType.router.js";
const organizationChart = Router();
organizationChart.use("/admin_type", adminTypeRouter);
export default organizationChart;
//# sourceMappingURL=organizationChart.router.js.map