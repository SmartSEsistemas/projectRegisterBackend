import { AppMessage } from '../../utils/AppMessage.js';
import prismaInstance from '../../prisma/client.js';
import deletePhoto from '../../utils/deletePhoto.js';
class EntityService {
    async create(entity, user_id, file) {
        try {
            await this.checkIds(entity);
            if (await this.findEntity(entity))
                throw new Error('Entidade já cadastrada.');
            if (file)
                await this.handlePhoto(file.filename, user_id);
            await this.checkFields(entity);
            await prismaInstance
                .prisma()
                .register_entity.create({
                data: {
                    ...entity,
                    first_user: user_id,
                    coat_of_arms: file ? file.filename : '',
                },
            })
                .catch(() => {
                throw new Error('Error ao cadastrar entidade');
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
    async update(entity, user_id, file) {
        try {
            await this.checkIds(entity);
            const foundEntity = await this.findEntity(entity);
            if (!foundEntity)
                throw new Error('Entidade não cadastrada.');
            await this.checkEntity(foundEntity.id);
            await this.checkFields(entity);
            const entityResult = await prismaInstance
                .prisma()
                .register_entity.update({
                where: {
                    register_entity_type_id_register_legal_person_id_nr_tce: {
                        nr_tce: entity.nr_tce,
                        register_entity_type_id: entity.register_entity_type_id,
                        register_legal_person_id: entity.register_legal_person_id,
                    },
                },
                data: {
                    ...entity,
                    last_user: user_id,
                },
            })
                .catch(() => {
                throw new Error('Error ao cadastrar entidade');
            });
            if (!file)
                return;
            if (entityResult.coat_of_arms)
                deletePhoto(entityResult.coat_of_arms);
            await prismaInstance
                .prisma()
                .register_entity.update({
                where: {
                    register_entity_type_id_register_legal_person_id_nr_tce: {
                        nr_tce: entity.nr_tce,
                        register_entity_type_id: entity.register_entity_type_id,
                        register_legal_person_id: entity.register_legal_person_id,
                    },
                },
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
                throw new Error('Error ao atualizar foto da entidade.');
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
    async get() {
        return await prismaInstance
            .prisma()
            .register_entity.findMany({
            select: {
                Register_legal_person: {
                    select: { corporate_name: true },
                },
            },
        })
            .then((entities) => ({
            entity_name_list: entities.map((entity) => entity.Register_legal_person.corporate_name),
        }))
            .catch(() => {
            throw new AppMessage('Error ao pegar entidade.', 400);
        });
    }
    async delete(entity_id) {
        try {
            const entity = await this.checkEntity(entity_id);
            await prismaInstance
                .prisma()
                .register_entity.delete({
                where: {
                    register_entity_type_id_register_legal_person_id_nr_tce: {
                        nr_tce: entity.nr_tce,
                        register_entity_type_id: entity.register_entity_type_id,
                        register_legal_person_id: entity.register_legal_person_id,
                    },
                },
            })
                .catch(() => {
                throw new Error('Error ao deletar entidade.');
            });
        }
        catch (error) {
            throw new AppMessage(error.message, 400);
        }
        finally {
            await prismaInstance.prisma().$disconnect();
        }
    }
    async checkEntity(entity_id) {
        const entity = await prismaInstance
            .prisma()
            .register_entity.findUnique({
            where: { id: entity_id },
            include: {
                Register_resp_entity: true,
            },
        })
            .catch(() => {
            throw new Error('Error ao pegar entidade para deletar.');
        });
        if (!entity)
            throw new Error('Entidade não encontrada');
        if (entity.Register_resp_entity.length > 0)
            throw new Error('Entidade não pode ser deletada/editada pois já foi referenciada.');
        return entity;
    }
    async findEntity({ nr_tce, register_entity_type_id, register_legal_person_id, }) {
        return await prismaInstance
            .prisma()
            .register_entity.findUnique({
            where: {
                register_entity_type_id_register_legal_person_id_nr_tce: {
                    nr_tce,
                    register_entity_type_id,
                    register_legal_person_id,
                },
            },
        })
            .catch(() => {
            throw new Error('Error ao procurar entidade.');
        });
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
    async checkFields({ rpps, plan_type, accounting_advice, person_advisory_id }) {
        if (rpps && !plan_type)
            throw new Error('É necessário passar o tipo do plano');
        if (accounting_advice && !person_advisory_id)
            throw new Error('É necessário passar o ID da pessoa acessoria.');
    }
    async checkIds({ register_county_id, register_entity_type_id, register_legal_nature_id, register_legal_person_id, }) {
        const [entity, person, nature] = await Promise.all([
            prismaInstance.prisma().register_entity_type.findUnique({
                where: { id: register_entity_type_id },
            }),
            prismaInstance.prisma().register_legal_person.findUnique({
                where: { id: register_legal_person_id },
            }),
            prismaInstance.prisma().register_legal_nature.findUnique({
                where: { id: register_legal_nature_id },
            }),
            prismaInstance.prisma().register_county.findUnique({ where: { id: register_county_id } }),
        ]);
        const result = { entity, person, nature };
        const errors = [];
        Object.keys(result).forEach((table) => {
            if (!result[table])
                errors.push(`ID da tabela ${table} incorreto.`);
        });
        if (errors.length)
            throw new AppMessage(errors, 404);
    }
}
export default new EntityService();
//# sourceMappingURL=EntityService.js.map