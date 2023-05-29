import { Router } from "express";
import legalNatureController from "../../../../controllers/entity/legalNature/LegalNatureController.js";
import { permission } from "../../../../middlewares/permissions.js";
const legalNatureRouter = Router();
legalNatureRouter.post("/", permission(["create_legal_nature"]), legalNatureController.register);
legalNatureRouter.put("/:id", permission(["update_legal_nature"]), legalNatureController.update);
legalNatureRouter.get("/:id", permission(["get_legal_nature"]), legalNatureController.show);
legalNatureRouter.delete("/:id", permission(["delete_legal_nature"]), legalNatureController.delete);
export default legalNatureRouter;
//# sourceMappingURL=legalNature.router.js.map