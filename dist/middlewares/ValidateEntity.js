import { AppMessage } from "../utils/AppMessage";
export default class ValidadeEntity {
    static async required(req, res, next) {
        try {
            next();
        }
        catch (error) {
            throw new AppMessage("Entidade inválido ou não enviado", 404);
        }
    }
    ;
}
//# sourceMappingURL=ValidateEntity.js.map