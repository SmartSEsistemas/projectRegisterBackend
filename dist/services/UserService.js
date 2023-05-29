import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import sgMail from '@sendgrid/mail';
import { AppError } from "../helper/AppError.js";
import prismaInstance from '../prisma/client.js';
import { generateRandomPassword } from "../helper/generateRandomPassword.js";
class UserService {
    async token({ document, password }) {
        const person = await this.findUser(document);
        if (!person)
            throw new AppError("Usuário não encontrado ou não cadastrado.");
        this.comparePassword(password, person.password);
        const secretKey = process.env.JWT_SECRET || 'defaultSecret';
        return {
            token: jwt.sign({
                user: {
                    document: person.document,
                    type_person: person.type_person
                }
            }, secretKey, { expiresIn: '1d' })
        };
    }
    async record({ document }) {
        return await this.findPerson(document);
    }
    async update({ document }, { new_password, old_password }) {
        const user = await this.findUser(document);
        if (!user)
            throw new AppError('Usuário não encontrado.');
        this.comparePassword(old_password, user.password);
        const hashPassword = bcrypt.hashSync(new_password, 10);
        return await prismaInstance.prisma().user.update({
            where: { document },
            data: { password: hashPassword }
        }).then(() => ({ status: 'success', message: 'Usuário atualizado com sucesso.' }))
            .catch(() => {
            throw new AppError('Error ao atualizar o usuário.');
        });
    }
    async resetPassword({ document }) {
        let person;
        try {
            person = await this.findPerson(document);
            if (!person)
                throw new AppError("Pessoa não encontrada ou não cadastrada.");
            const temporaryPassword = generateRandomPassword(10);
            sgMail.setApiKey(process.env.EMAIL_TOKEN);
            const mensage = {
                to: person.email,
                from: 'phelipedsantos@hotmail.com',
                subject: 'Senha temporária projeto base SmartSE',
                text: 'Conteúdo do email',
                html: `<strong>
        Senha temporária: ${temporaryPassword}
      </strong>`,
            };
            await sgMail.send(mensage);
            const hashPassword = bcrypt.hashSync(temporaryPassword, 10);
            await prismaInstance.prisma().user.update({
                where: { document },
                data: { password: hashPassword }
            });
            return { status: 'success', message: `Senha temporária enviada para o e-mail: ${person.email}` };
        }
        catch (error) {
            throw new AppError(`Não foi possível enviar a senha para o e-mail: ${person?.email}`);
        }
    }
    async findPerson(document) {
        return await prismaInstance.prisma().user.findUnique({
            where: { document },
            include: {
                Register_legal_person: true,
                Register_natural_person: true
            }
        }).then((person) => {
            return person?.Register_legal_person ?? person?.Register_natural_person;
        }).catch(() => {
            throw new AppError('Usuário não encontrado.');
        });
    }
    async findUser(document) {
        return await prismaInstance.prisma().user.findUnique({ where: { document } });
    }
    comparePassword(password, hashPassword) {
        const userValid = bcrypt.compareSync(password, hashPassword);
        if (!userValid)
            throw new AppError("Nº do documento e/ou senha esta(ão) incorreto(s).");
    }
}
export default new UserService();
//# sourceMappingURL=UserService.js.map