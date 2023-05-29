import { recoverSchema } from "../../../dto/login/recover/RecoverPasswordDTO.js";
import recoverPasswordService from "../../../services/login/recover/RecoverPasswordService.js";
class RecoverPasswordController {
    async revocer(req, res) {
        const data = recoverSchema.parse(req.body);
        const result = await recoverPasswordService.resetPassword(data);
        return res.status(200).json(result);
    }
}
export default new RecoverPasswordController();
//# sourceMappingURL=RecoverPasswordContoller.js.map