import { Router } from "express";
import accessAuthorizationController from "../../../controllers/access/accessAuthorization/AccessAuthorizationController.js";
import { permission } from "../../../middlewares/permissions.js";
const accessAuthorizationRouter = Router();
accessAuthorizationRouter.post("/", permission(["create_authorization"]), accessAuthorizationController.register);
accessAuthorizationRouter.put("/:id", permission(["update_authorization"]), accessAuthorizationController.update);
accessAuthorizationRouter.get("/:id", permission(["get_authorization"]), accessAuthorizationController.show);
accessAuthorizationRouter.delete("/:id", permission(["delete_authorization"]), accessAuthorizationController.delete);
export default accessAuthorizationRouter;
//# sourceMappingURL=accessAuthorization.router.js.map