import { Router } from "express";
import naturalPersonController from "../controllers/NaturalPersonController.js";
const naturalPersonRoutes = Router();
naturalPersonRoutes.post("/", naturalPersonController.register);
naturalPersonRoutes.get("/", naturalPersonController.test);
naturalPersonRoutes.put("/", naturalPersonController.update);
export default naturalPersonRoutes;
//# sourceMappingURL=naturalPerson.router%20copy.js.map