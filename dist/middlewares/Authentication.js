import jwt from 'jsonwebtoken';
import { AppMessage } from "../utils/AppMessage.js";
const secretKey = process.env.JWT_SECRET || 'defaultSecret';
export default class Authentication {
    static required(req, res, next) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token)
                throw new AppMessage("Token inválido ou não enviado");
            const decode = jwt.verify(token, secretKey);
            if (decode.user)
                req.user = decode.user;
            next();
        }
        catch (error) {
            throw new AppMessage("Token inválido ou não enviado", 401);
        }
    }
    ;
}
//# sourceMappingURL=Authentication.js.map