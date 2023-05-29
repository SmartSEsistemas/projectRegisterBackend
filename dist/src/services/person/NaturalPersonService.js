import bcrypt from "bcrypt";
import { AppError } from "../../helper/AppError.js";
import prismaInstance from '../../prisma/client.js';
import deletePhoto from "../../helper/deletePhoto.js";
class NaturalPersonService {
    async create(person, file) {
        const { cpf } = person;
        const { password, ...personWithoutPassword } = person;
        const existingPerson = await this.findPerson(cpf);
        if (existingPerson) {
            deletePhoto(file.filename);
            throw new AppError("Pessoa já cadastrada.");
        }
        ;
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
                },
                Photo: {
                    create: {
                        name_photo: file.filename
                    }
                },
            }
        }).then(() => ({ status: 'success', message: 'Pessoa física cadastrada com sucesso.' }))
            .catch((e) => {
            console.log(e);
            throw new AppError('Error ao criar usuário.');
        });
    }
    async update({ document }, { person, reason }, file) {
        if (!await this.findPerson(document)) {
            if (file)
                deletePhoto(file.filename);
            throw new AppError("Pessoa não cadastrada.");
        }
        return await prismaInstance.prisma().register_natural_person.update({
            where: { cpf: document },
            data: {
                ...person,
                Register_change_natural_person: {
                    create: { ...reason }
                }
            },
        })
            .then(async (person) => {
            if (!file)
                return;
            deletePhoto(person.photo);
            await prismaInstance.prisma().register_natural_person.update({
                where: { cpf: document },
                data: {
                    Photo: {
                        update: {
                            name_photo: file.filename
                        }
                    }
                }
            });
        })
            .then(() => ({ status: 'success', message: 'Pessoa alterada com sucesso.' }))
            .catch((err) => {
            console.log(err);
            throw new AppError('Error ao alterar usuário.');
        });
    }
    async get(cpf) {
        const result = await prismaInstance.prisma().user.findUnique({
            where: { document: cpf },
            select: { Register_natural_person: true }
        });
        console.log(result?.Register_natural_person);
    }
    async findPerson(cpf) {
        return await prismaInstance.prisma().register_natural_person.findUnique({ where: { cpf }, include: { User: true } });
    }
}
export default new NaturalPersonService();
//# sourceMappingURL=NaturalPersonService.js.map