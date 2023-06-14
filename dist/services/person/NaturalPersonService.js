import { AppMessage } from '../../utils/AppMessage.js';
import prismaInstance from '../../prisma/client.js';
import deletePhoto from '../../utils/deletePhoto.js';
class NaturalPersonService {
    async create(person, user_id, entity_id, file) {
        try {
            const result = await this.checkIds(person, entity_id);
            if (await this.findPerson(person.cpf, entity_id))
                throw new Error('Pessoa física já cadastrada.');
            if (file)
                await this.handlePhoto(file.filename, user_id);
            await prismaInstance
                .prisma()
                .register_natural_person.create({
                data: {
                    ...person,
                    register_county_id: result.id,
                    first_user: user_id,
                    register_entity_id: entity_id,
                    photo: file ? file.filename : '',
                },
            })
                .catch(() => {
                throw new Error('Error ao cadastrar pessoa');
            });
        }
        catch (error) {
            if (file)
                deletePhoto(file.filename);
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async update({ person, reason }, user_id, entity_id, file) {
        const { cpf, ...personWithoutCpf } = person;
        try {
            await this.checkPerson(cpf, entity_id);
            await this.checkIds(person, entity_id);
            if (!(await prismaInstance.prisma().register_natural_person.findUnique({
                where: { id: reason.person_id },
            })))
                throw new Error('ID passado no motivo não existe.');
            const personResult = await prismaInstance
                .prisma()
                .register_natural_person.update({
                where: { cpf_register_entity_id: { cpf, register_entity_id: entity_id } },
                data: {
                    ...personWithoutCpf,
                    last_user: user_id,
                    Register_change_natural_person: {
                        create: {
                            ...reason,
                            first_user: user_id,
                            register_entity_id: entity_id,
                        },
                    },
                },
            })
                .catch(() => {
                throw new Error('Error ao atualizar pessoa física');
            });
            if (!file)
                return;
            if (personResult.photo)
                deletePhoto(personResult.photo);
            await prismaInstance
                .prisma()
                .register_natural_person.update({
                where: { cpf_register_entity_id: { cpf, register_entity_id: entity_id } },
                data: {
                    Register_photo: {
                        update: {
                            name_photo: file.filename,
                            last_user: user_id,
                        },
                    },
                },
            })
                .catch(() => {
                throw new Error('Error ao atualizar foto da pessoa física.');
            });
        }
        catch (error) {
            if (file)
                deletePhoto(file.filename);
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async get(cpf, register_entity_id) {
        return await prismaInstance
            .prisma()
            .register_natural_person.findUnique({
            where: { cpf_register_entity_id: { cpf, register_entity_id } },
        })
            .catch(() => {
            throw new AppMessage('Error ao pegar pessoa física.');
        });
    }
    async delete(cpf, register_entity_id) {
        try {
            await this.checkPerson(cpf, register_entity_id);
            await prismaInstance
                .prisma()
                .register_natural_person.delete({
                where: { cpf_register_entity_id: { cpf, register_entity_id } },
            })
                .catch(() => {
                throw new Error('Error ao deletar pessoa física.');
            });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async checkPerson(cpf, register_entity_id) {
        const person = await prismaInstance
            .prisma()
            .register_natural_person.findUnique({
            where: { cpf_register_entity_id: { cpf, register_entity_id } },
            include: {
                Register_resp_entity: true,
                Register_resp_organization_chart: true,
            },
        })
            .catch(() => {
            throw new Error('Error ao pegar pessoa física para deletar/editar.');
        });
        if (!person)
            throw new Error('Pessoa física não encontrada');
        if (person.Register_resp_entity.length > 0 || person.Register_resp_organization_chart.length > 0)
            throw new Error('Pessoa física não pode ser deletada/editada pois já foi referenciada.');
    }
    async findPerson(cpf, register_entity_id) {
        return await prismaInstance
            .prisma()
            .register_natural_person.findUnique({ where: { cpf_register_entity_id: { cpf, register_entity_id } } });
    }
    async handlePhoto(filename, user_id) {
        await prismaInstance
            .prisma()
            .register_photo.create({
            data: {
                name_photo: filename,
                first_user: user_id,
            },
        })
            .catch(() => {
            throw new Error('Error ao cadastrar foto');
        });
    }
    async checkIds({ register_county_id, state_uf_id, register_uf_id }, entity_id) {
        const [uf, county, state, entity] = await Promise.all([
            prismaInstance.prisma().register_uf.findUnique({ where: { id: register_uf_id } }),
            prismaInstance.prisma().register_county.findUnique({ where: { id: register_county_id } }),
            prismaInstance.prisma().register_uf.findUnique({ where: { id: state_uf_id } }),
            prismaInstance.prisma().register_entity.findUnique({ where: { id: entity_id } }),
        ]);
        const result = { uf, county, state, entity };
        const errors = [];
        Object.keys(result).forEach((table) => {
            if (!result[table])
                errors.push(`ID da tabela ${table} incorreto.`);
        });
        if (errors.length)
            throw new AppMessage(errors, 404);
        return county;
    }
}
export default new NaturalPersonService();
//# sourceMappingURL=NaturalPersonService.js.map