import { Router } from "express";
import naturalPersonController from "../controllers/NaturalPersonController.js";
const naturalPersonRoutes = Router();
naturalPersonRoutes.post("/", naturalPersonController.register);
naturalPersonRoutes.put("/", naturalPersonController.update);
naturalPersonRoutes.get("/", naturalPersonController.test);
export default naturalPersonRoutes;
//# sourceMappingURL=naturalPerson.router.js.map