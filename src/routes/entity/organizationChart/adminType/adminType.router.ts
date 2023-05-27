import { Router } from "express";
import adminTypeController from "../../../../controllers/organizationChart/adminType/AdminTypeController.js";
const adminTypeRouter = Router();

adminTypeRouter.post("/", adminTypeController.register);
adminTypeRouter.put("/:id", adminTypeController.update);
adminTypeRouter.get("/:id", adminTypeController.show);
adminTypeRouter.delete("/:id", adminTypeController.delete);

export default adminTypeRouter;