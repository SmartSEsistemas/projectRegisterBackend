import { Router } from "express";
import accessRequestController from "../../../controllers/login/request/AccessRequestController.js";
import { permission } from "../../../middlewares/permissions.js";
const accessRequestRouter = Router();
accessRequestRouter.post("/", permission(["create_access_request"]), accessRequestController.register);
export default accessRequestRouter;
//# sourceMappingURL=accessRequest.router.js.map