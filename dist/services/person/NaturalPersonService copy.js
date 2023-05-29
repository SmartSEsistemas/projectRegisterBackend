import { AppError } from "../../helper/AppError.js";
import prismaInstance from '../../prisma/client.js';
import bcrypt from "bcrypt";
class NaturalPersonService {
    async create(person) {
        const { cpf } = person;
        const { password, ...personWithoutPassword } = person;
        const existingPerson = await this.findPerson(cpf);
        if (existingPerson)
            throw new AppError("Pessoa já cadastrada.");
        const hasPassword = bcrypt.hashSync(password, 10);
        return await prismaInstance.prisma().register_natural_person.create({
            data: {
                ...personWithoutPassword,
                User: {
                    create: {
                        password: hasPassword,
                        document: cpf,
                        type_person: 'NATURAL'
                    }
                }
            }
        }).then(() => ({ status: 'success', message: 'Pessoa física cadastrada com sucesso.' }))
            .catch(() => { throw new AppError('Error ao criar usuário.'); });
    }
    async update(body) {
        const { person, reason } = body;
        if (!await this.findPerson(person.cpf))
            throw new AppError("Pessoa não cadastrada.");
        const { password, ...personWithoutPassword } = person;
        return await prismaInstance.prisma().register_natural_person.update({
            where: { cpf: person.cpf },
            data: {
                ...personWithoutPassword,
                Register_change_natural_person: {
                    create: { ...reason }
                }
            },
        }).then(() => ({ status: 'success', message: 'Pessoa alterada com sucesso.' }))
            .catch(() => { throw new AppError('Error ao alterar usuário.'); });
    }
    async get(cpf) {
        const result = await prismaInstance.prisma().user.findUnique({
            where: { document: cpf },
            select: { Register_natural_person: true }
        });
    }
    async findPerson(cpf) {
        return await prismaInstance.prisma().register_natural_person.findUnique({ where: { cpf }, include: { User: true } });
    }
}
export default new NaturalPersonService();
//# sourceMappingURL=NaturalPersonService%20copy.js.map