import bcrypt from 'bcrypt';
import prismaInstance from '../../../prisma/client.js';
import { AppMessage } from '../../../utils/AppMessage.js';
class LegalPersonService {
    async naturalPerson(person, updateData) {
        try {
            const entity_id = await this.findEntity(updateData.entity);
            if (await this.findUser(person.cpf, entity_id))
                throw new Error('Usuário com o cpf nessa entidade já cadastrada.');
            await this.checkIds(person.register_county_id, person.state_uf_id, person.register_uf_id);
            const user = await this.createUser(person.cpf, updateData.password, entity_id, 'NATURAL');
            if (!(await this.checkPerson(person, entity_id)))
                await this.createPerson(person, entity_id, user.id);
        }
        catch (error) {
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async legalPerson(person, updateData) {
        try {
            const entity_id = await this.findEntity(updateData.entity);
            if (await this.findUser(person.cnpj, entity_id))
                throw new Error('Usuário com o cnpj nessa entidade já cadastrada.');
            await this.checkIds(person.register_county_id, person.state_uf_id);
            const user = await this.createUser(person.cnpj, updateData.password, entity_id, 'LEGAL');
            if (!(await this.checkPerson(person, entity_id)))
                await this.createPerson(person, entity_id, user.id);
        }
        catch (error) {
            if (error instanceof AppMessage)
                throw new AppMessage(error.Message, error.Status_code);
            else
                throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async createUser(document, password, register_entity_id, type_person) {
        const hashPassword = bcrypt.hashSync(password, 10);
        return await prismaInstance
            .prisma()
            .register_user.create({
            data: {
                active: false,
                document,
                password: hashPassword,
                register_entity_id,
                type_person,
            },
        })
            .catch(() => {
            throw new Error('Error ao cadastrar usuário');
        });
    }
    async createPerson(person, entity_id, user_id) {
        if ('cnpj' in person)
            await prismaInstance.prisma().register_legal_person.create({
                data: {
                    ...person,
                    register_entity_id: entity_id,
                    first_user: user_id,
                },
            });
        else if ('cpf' in person)
            await prismaInstance.prisma().register_natural_person.create({
                data: {
                    ...person,
                    register_entity_id: entity_id,
                    first_user: user_id,
                },
            });
    }
    async findUser(document, register_entity_id) {
        return await prismaInstance.prisma().register_user.findUnique({
            where: { document_register_entity_id: { document, register_entity_id } },
        });
    }
    async checkPerson(person, entity_id) {
        if ('cnpj' in person)
            return await prismaInstance.prisma().register_legal_person.findUnique({
                where: { cnpj_register_entity_id: { cnpj: person.cnpj, register_entity_id: entity_id } },
            });
        else if ('cpf' in person)
            return await prismaInstance.prisma().register_natural_person.findUnique({
                where: { cpf_register_entity_id: { cpf: person.cpf, register_entity_id: entity_id } },
            });
        else
            return null;
    }
    async findEntity(entity_name) {
        return await prismaInstance
            .prisma()
            .register_legal_person.findFirst({
            where: { corporate_name: entity_name },
            select: {
                Register_entity: {
                    select: {
                        id: true,
                    },
                },
            },
        })
            .then((entity) => {
            if (!entity?.Register_entity[0].id)
                throw new Error('Error ao encontrar entidade.');
            return entity?.Register_entity[0].id;
        })
            .catch(() => {
            throw new Error('Error ao encontrar entidade.');
        });
    }
    async checkIds(register_county_id, state_uf_id, register_uf_id) {
        const [county, state] = await Promise.all([
            prismaInstance.prisma().register_county.findUnique({ where: { id: register_county_id } }),
            prismaInstance.prisma().register_uf.findUnique({ where: { id: state_uf_id } }),
        ]);
        const uf = await prismaInstance.prisma().register_uf.findUnique({ where: { id: register_uf_id } });
        const result = { county, state, uf };
        const errors = [];
        Object.keys(result).forEach((table) => {
            if (table === 'uf' && !register_uf_id)
                return;
            if (!result[table])
                errors.push(`ID da tabela ${table} incorreto.`);
        });
        if (errors.length)
            throw new AppMessage(errors, 404);
    }
}
export default new LegalPersonService();
//# sourceMappingURL=AccessRequestService.js.map