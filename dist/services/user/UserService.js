import { AppMessage } from "../../utils/AppMessage.js";
import prismaInstance from '../../prisma/client.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
class UserService {
    async token({ document, password }) {
        console.log(bcrypt.hashSync(password, 10));
        const person = await this.findUser(document);
        if (!person)
            throw new AppMessage("Usuário não encontrado ou não cadastrado.");
        this.comparePassword(password, person.password);
        const secretKey = process.env.JWT_SECRET || 'defaultSecret';
        return {
            token: jwt.sign({
                user: {
                    document: person.document,
                    type_person: person.type_person,
                    entity_id: person.register_entity_id,
                    user_id: person.id
                }
            }, secretKey, { expiresIn: '1d' })
        };
    }
    async record({ document, type_person }) {
        return await prismaInstance.prisma().register_user.findUnique({
            where: { document },
            include: {
                Register_legal_person: type_person === 'LEGAL',
                Register_natural_person: type_person === 'NATURAL'
            }
        }).then((person) => {
            return person?.Register_legal_person ?? person?.Register_natural_person;
        }).catch(() => {
            throw new AppMessage('Usuário não encontrado.');
        });
    }
    async update({ document }, { new_password, old_password }) {
        const user = await prismaInstance.prisma().register_user.findUnique({ where: { document } });
        if (!user)
            throw new AppMessage('Usuário não encontrado.');
        this.comparePassword(old_password, user.password);
        const hashPassword = bcrypt.hashSync(new_password, 10);
        await prismaInstance.prisma().register_user.update({
            where: { document },
            data: { password: hashPassword }
        });
    }
    async findUser(document) {
        return await prismaInstance.prisma().register_user.findUnique({ where: { document } });
    }
    comparePassword(password, hashPassword) {
        const userValid = bcrypt.compareSync(password, hashPassword);
        if (!userValid)
            throw new AppMessage("Nº do documento e/ou senha esta(ão) incorreto(s).");
    }
}
export default new UserService();
//# sourceMappingURL=UserService.js.map