import { Router } from "express";
import adminTypeController from "../../../../controllers/organizationChart/adminType/AdminTypeController.js";
import { permission } from "../../../../middlewares/permissions.js";
const adminTypeRouter = Router();
adminTypeRouter.post("/", permission(["create_admin_type"]), adminTypeController.register);
adminTypeRouter.put("/:id", permission(["update_admin_type"]), adminTypeController.update);
adminTypeRouter.get("/:id", permission(["get_admin_type"]), adminTypeController.show);
adminTypeRouter.delete("/:id", permission(["delete_admin_type"]), adminTypeController.delete);
export default adminTypeRouter;
//# sourceMappingURL=adminType.router.js.map