import { Router } from "express";
import adminTypeController from "../../../controllers/entity/adminType/AdminTypeController.js";
const adminTypeRouter = Router();
adminTypeRouter.post("/", adminTypeController.register);
adminTypeRouter.put("/:id", adminTypeController.update);
adminTypeRouter.get("/:id", adminTypeController.show);
adminTypeRouter.delete("/:id", adminTypeController.delete);
export default adminTypeRouter;
//# sourceMappingURL=adminType.router.js.map