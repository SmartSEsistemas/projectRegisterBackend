import { Router } from "express";
import legalPersonController from "../../../controllers/person/legalPerson/LegalPersonController.js";
import { photoMiddleware } from "../../../middlewares/uploadPhoto.js";
import { permission } from "../../../middlewares/permissions.js";
const legalPersonRoutes = Router();
legalPersonRoutes.post("/", permission(["create_legal_person"]), photoMiddleware(), legalPersonController.register);
legalPersonRoutes.put("/", permission(["update_legal_person"]), photoMiddleware(), legalPersonController.update);
legalPersonRoutes.get("/:cnpj", permission(["get_legal_person"]), legalPersonController.show);
legalPersonRoutes.delete("/:cnpj", permission(["delete_legal_person"]), legalPersonController.delete);
export default legalPersonRoutes;
//# sourceMappingURL=legalPerson.router.js.map