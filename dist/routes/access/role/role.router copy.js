import { Router } from "express";
import roleController from "../../../controllers/access/role/RoleController.js";
const roleRouter = Router();
roleRouter.post("/", roleController.register);
roleRouter.put("/", roleController.update);
roleRouter.get("/", roleController.show);
roleRouter.delete("/", roleController.delete);
export default roleRouter;
//# sourceMappingURL=role.router%20copy.js.map