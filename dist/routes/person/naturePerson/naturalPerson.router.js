import { Router } from "express";
import naturalPersonController from "../../../controllers/person/naturalPerson/NaturalPersonController.js";
import { photoMiddleware } from "../../../middlewares/uploadPhoto.js";
import { permission } from "../../../middlewares/permissions.js";
const naturalPersonRoutes = Router();
naturalPersonRoutes.post("/", permission(["create_natura_person"]), photoMiddleware(), naturalPersonController.register);
naturalPersonRoutes.put("/", photoMiddleware(), permission(["update_natura_person"]), naturalPersonController.update);
naturalPersonRoutes.get("/:cpf", permission(["get_natura_person"]), naturalPersonController.show);
naturalPersonRoutes.delete("/:cpf", permission(["delete_natura_person"]), naturalPersonController.delete);
export default naturalPersonRoutes;
//# sourceMappingURL=naturalPerson.router.js.map