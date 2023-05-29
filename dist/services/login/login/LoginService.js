import prismaInstance from '../../../prisma/client.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppMessage } from '../../../utils/AppMessage.js';
class LoginService {
    async token(login) {
        const entity_id = await this.findEntity(login.entity);
        const user = await this.findUser(login.document, entity_id);
        if (!user)
            throw new AppMessage('Usuário não encontrado ou não cadastrado para essa entidade.');
        this.comparePassword(login.password, user.password);
        const secretKey = process.env.JWT_SECRET || 'defaultSecret';
        return {
            token: jwt.sign({
                user: {
                    document: user.document,
                    type_person: user.type_person,
                    entity_id: user.register_entity_id,
                    user_id: user.id,
                },
            }, secretKey, { expiresIn: '1d' }),
        };
    }
    async findEntity(nameEntity) {
        const legalPerson = await prismaInstance
            .prisma()
            .register_legal_person.findFirst({
            where: { corporate_name: nameEntity },
            select: {
                Register_entity: true,
            },
        })
            .catch(() => {
            throw new AppMessage('Erro ao procurar entidade.');
        });
        if (!legalPerson)
            throw new AppMessage('Pessoa jurídica não encontrada.');
        if (legalPerson.Register_entity.length < 0)
            throw new AppMessage('Pessoa jurídica sem entidade.');
        return legalPerson.Register_entity[0].id;
    }
    async findUser(document, register_entity_id) {
        return await prismaInstance
            .prisma()
            .register_user.findUnique({
            where: {
                document_register_entity_id: { document, register_entity_id },
            },
        })
            .catch(() => {
            throw new AppMessage('Erro ao encontrar usuário.');
        });
    }
    comparePassword(password, hashPassword) {
        const userValid = bcrypt.compareSync(password, hashPassword);
        if (!userValid)
            throw new AppMessage('Nº do documento e/ou senha esta(ão) incorreto(s).');
    }
}
export default new LoginService();
//# sourceMappingURL=LoginService.js.map