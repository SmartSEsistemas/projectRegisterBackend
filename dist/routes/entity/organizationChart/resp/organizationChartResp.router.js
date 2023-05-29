import { Router } from "express";
import organizationChartRespController from "../../../../controllers/organizationChart/resp/OrganizationChartRespController.js";
import { permission } from "../../../../middlewares/permissions.js";
const organizationChartRespRouter = Router();
organizationChartRespRouter.post("/", permission(["create_resp_organization_chart"]), organizationChartRespController.register);
organizationChartRespRouter.put("/:id", permission(["update_resp_organization_chart"]), organizationChartRespController.update);
organizationChartRespRouter.get("/:id", permission(["get_resp_organization_chart"]), organizationChartRespController.show);
organizationChartRespRouter.delete("/:id", permission(["delete_resp_organization_chart"]), organizationChartRespController.delete);
export default organizationChartRespRouter;
//# sourceMappingURL=organizationChartResp.router.js.map