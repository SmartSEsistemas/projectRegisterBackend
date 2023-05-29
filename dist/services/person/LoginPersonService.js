import { AppError } from "../../helper/AppError.js";
import prismaInstance from '../../prisma/client.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
class LoginPersonService {
    async token({ document, password }) {
        const person = await this.findUser(document);
        if (!person)
            throw new AppError("Usuário não encontrado ou não cadastrado.");
        const userValid = bcrypt.compareSync(password, person.password);
        if (!userValid)
            throw new AppError("Nº do documento e/ou senha esta(ão) incorreto(s).");
        const secretKey = process.env.JWT_SECRET || 'defaultSecret';
        return {
            token: jwt.sign({
                document: person.document,
                type_person: person.type_person
            }, secretKey, { expiresIn: '1d' })
        };
    }
    async findUser(document) {
        return await prismaInstance.prisma().user.findUnique({ where: { document } });
    }
}
export default new LoginPersonService();
//# sourceMappingURL=LoginPersonService.js.map