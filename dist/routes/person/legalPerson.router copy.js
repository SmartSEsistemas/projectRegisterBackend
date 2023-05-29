import { Router } from "express";
import legalPersonController from "../../controllers/LegalPersonController.js";
const legalPersonRoutes = Router();
legalPersonRoutes.post("/", legalPersonController.register);
legalPersonRoutes.put("/", legalPersonController.update);
legalPersonRoutes.get("/", legalPersonController.test);
export default legalPersonRoutes;
//# sourceMappingURL=legalPerson.router%20copy.js.map