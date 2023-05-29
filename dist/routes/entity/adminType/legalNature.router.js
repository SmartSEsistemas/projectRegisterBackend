import { Router } from "express";
import legalNatureController from "../../../controllers/entity/legalNature/LegalNatureController.js";
const adminTypeRouter = Router();
adminTypeRouter.post("/", legalNatureController.register);
adminTypeRouter.put("/:id", legalNatureController.update);
adminTypeRouter.get("/:id", legalNatureController.show);
adminTypeRouter.delete("/:id", legalNatureController.delete);
export default adminTypeRouter;
//# sourceMappingURL=legalNature.router.js.map