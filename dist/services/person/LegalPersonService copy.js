import { AppError } from "../../helper/AppError.js";
import prismaInstance from '../../prisma/client.js';
import bcrypt from "bcrypt";
class LegalPersonService {
    async create(person) {
        const { cnpj } = person;
        const { password, ...personWithoutPassword } = person;
        const existingPerson = await this.findPerson(cnpj);
        if (existingPerson)
            throw new AppError("Pessoa já cadastrada.");
        const hasPassword = bcrypt.hashSync(password, 10);
        return await prismaInstance.prisma().register_legal_person.create({
            data: {
                ...personWithoutPassword,
                User: {
                    create: {
                        password: hasPassword,
                        document: cnpj,
                        type_person: 'LEGAL'
                    }
                }
            }
        }).then(() => ({ status: 'success', message: 'Pessoa jurídica cadastrada com sucesso.' }))
            .catch(() => { throw new AppError('Error ao criar pessoa jurídica.'); });
    }
    async update(body) {
        const { person, reason } = body;
        if (!await this.findPerson(person.cnpj))
            throw new AppError("Pessoa não cadastrada.");
        const { password, ...personWithoutPassword } = person;
        return await prismaInstance.prisma().register_legal_person.update({
            where: { cnpj: person.cnpj },
            data: {
                ...personWithoutPassword,
                Register_change_legal_person: {
                    create: { ...reason }
                }
            },
        }).then(() => ({ status: 'success', message: 'Pessoa alterada com sucesso.' }))
            .catch(() => { throw new AppError('Error ao alterar usuário.'); });
    }
    async get(cnpj) {
        const result = await prismaInstance.prisma().user.findUnique({
            where: { document: cnpj },
            select: { Register_legal_person: true }
        });
        console.log(result?.Register_legal_person);
    }
    async findPerson(cnpj) {
        return await prismaInstance.prisma().register_legal_person.findUnique({ where: { cnpj }, include: { User: true } });
    }
}
export default new LegalPersonService();
//# sourceMappingURL=LegalPersonService%20copy.js.map