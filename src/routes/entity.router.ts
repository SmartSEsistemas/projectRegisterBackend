import { Router } from "express";
import entityController from "../controllers/EntityController.js";

const entityRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Entidade
 *   description: Operações relacionadas as entidades
 * components:
 *   schemas:
 *     Entity:
 *       type: object
 *       properties:
 *         legal_person_id:
 *           type: number
 *         legal_nature_id:
 *           type: number
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         site:
 *           type: string
 *         time_zone:
 *           type: string
 *         rpps:
 *           type: boolean
 *         plan_type:
 *           type: string
 *         county_id:
 *           type: number
 *         county_cod:
 *           type: string
 *         entity_type_id:
 *           type: number
 *         advisory:
 *           type: boolean
 *         person_advisory_id:
 *           type: number
 *         software_provider_person_id:
 *           type: number
 *         software_version:
 *           type: string
 *         creation_act:
 *           type: string
 *         date_institution:
 *           type: string
 *           format: date-time
 *         extinction_date:
 *           type: string
 *           format: date-time
 *     Uf:
 *       type: object
 *       properties:
 *         uf:
 *           type: string
 *         uf_cod:
 *           type: number
 *         description:
 *           type: string
 *     County:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *         nb_ibge:
 *           type: string
 *         uf_id:
 *           type: number
 *     Legal_nature:
 *       type: object
 *       properties:
 *         nb_legal_nature:
 *           type: string
 *         description:
 *           type: string
 *         start_date:
 *           type: string
 *           format: date-time
 *         final_date:
 *           type: string
 *           format: date-time
 *     Admin_type:
 *       type: object
 *       properties:
 *         legal_nature_id:
 *           type: number
 *         description:
 *           type: string
 *         start_date:
 *           type: string
 *           format: date-time
 *         final_date:
 *           type: string
 *           format: date-time
 *         type:
 *           type: string
 *           enum: ['DIRETA', 'INDIRETA']
 *         power:
 *           type: string
 *           enum: ['EXECUTIVO', 'LEGISLATIVO']
 *     Entity_type:
 *       type: object
 *       properties:
 *         nb_tce:
 *           type: string
 *         description:
 *           type: string
 *         start_date:
 *           type: string
 *           format: date-time
 *         final_date:
 *           type: string
 *           format: date-time
 *     Resp_entity:
 *       type: object
 *       properties:
 *         entity_id:
 *           type: number
 *         natural_person_id:
 *           type: number
 *         start_date:
 *           type: string
 *           format: date-time
 *         final_expected_date:
 *           type: string
 *           format: date-time
 *     Message:
 *       type: object
 *       properties:
 *         status:
 *             type: string
 *         message:
 *             type: string
 *     Reason:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         reason:
 *             type: string
 *             enum: ['ALTERACAO','INATIVACAO']
 */
/**
 * @swagger
 *
 * /entity:
 *   post:
 *     summary: Criar entidade
 *     description: Criar entidade
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_entity
 *         description: Criar entidade
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Entity'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/", entityController.registerEntity);
/**
 * @swagger
 *
 * /entity/uf:
 *   post:
 *     summary: Criar Uf
 *     description: Criar Uf
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_uf
 *         description: Criar Uf
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Uf'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/uf", entityController.registerUf);
/**
 * @swagger
 *
 * /entity/county:
 *   post:
 *     summary: Criar municipio
 *     description: Criar municipio
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_county
 *         description: Criar municipio
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/County'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/county", entityController.registerCounty);
/**
 * @swagger
 *
 * /entity/legal_natural:
 *   post:
 *     summary: Criar natureza jurídica
 *     description: Criar natureza jurídica
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_legal_nature
 *         description: Criar natureza jurídica
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Legal_nature'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/legal_natural", entityController.registerLegalNatural);
/**
 * @swagger
 *
 * /entity/admin_type:
 *   post:
 *     summary: Criar tipo de administração
 *     description: Criar tipo de administração
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_legal_nature
 *         description: Criar tipo de administração
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Admin_type'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/admin_type", entityController.registerAdminType);
/**
 * @swagger
 *
 * /entity/entity_type:
 *   post:
 *     summary: Criar tipo de entidade
 *     description: Criar tipo de entidade
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_entity_type
 *         description: Criar tipo de entidade
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Entity_type'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/entity_type", entityController.registerEntityType);
/**
 * @swagger
 *
 * /entity/resp_entity:
 *   post:
 *     summary: Criar responsável pela entidade
 *     description: Criar responsável pela entidade
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: create_Resp_entity
 *         description: Criar responsável pela entidade
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Resp_entity'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.post("/resp_entity", entityController.registerRespEntity);
/**
 * @swagger
 *
 * /entity/resp_entity:
 *   put:
 *     summary: Atualizar responsável pela entidade
 *     description: Atualizar responsável pela entidade
 *     tags: [Entidade]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: update_Resp_entity
 *         description: Atualizar responsável pela entidade
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             resp_entity_id:
 *               type: number
 *             resp_entity:
 *               $ref: '#/components/schemas/Resp_entity'
 *             reason:
 *               $ref: '#/components/schemas/Reason'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
entityRouter.put("/resp_entity", entityController.updateRespEntity);

export default entityRouter;