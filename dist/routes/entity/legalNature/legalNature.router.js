import { Router } from "express";
import legalNatureController from "../../../controllers/entity/legalNature/LegalNatureController.js";
const legalNatureRouter = Router();
legalNatureRouter.post("/", legalNatureController.register);
legalNatureRouter.put("/:id", legalNatureController.update);
legalNatureRouter.get("/:id", legalNatureController.show);
legalNatureRouter.delete("/:id", legalNatureController.delete);
export default legalNatureRouter;
//# sourceMappingURL=legalNature.router.js.map