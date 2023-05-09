import { Router } from "express";
import naturalPersonController from "../../controllers/NaturalPersonController.js";
import authentication from "../../middlewares/Authentication.js";
import { photoMiddleware } from "../../middlewares/uploadPhoto.js";

const naturalPersonRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Pessoa_fisica
 *   description: Operações relacionadas a pessoa física
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         nb_rg:
 *           type: string
 *         organ_emission_rg:
 *           type: string
 *         uf_rg:
 *           type: string
 *         date_emission_rg:
 *           type: string
 *           format: date-time
 *         cnh:
 *           type: string
 *         cpf:
 *           type: string
 *         date_birth:
 *           type: string
 *           format: date-time
 *         nationality:
 *           type: string
 *         address_cep:
 *           type: string
 *         address_street:
 *           type: string
 *         address_nb:
 *           type: string
 *         address_complement:
 *           type: string
 *         address_city:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         entity_id:
 *           type: number
 *         password:
 *           type: string
 *     Message:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *     Reason:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *         reason:
 *           type: string
 *           enum: ['ALTERACAO','INATIVACAO']
 */
/**
 * @swagger
 *
 * /person/natural:
 *   post:
 *     summary: Criar pessoa física
 *     description: Criar pessoa física
 *     tags: [Pessoa_fisica]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: formData
 *         name: photo
 *         description: Foto da pessoa
 *         required: true
 *         type: file
 *       - in: body
 *         name: create_natural_person
 *         description: Criar pessoa física
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Person'
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
naturalPersonRoutes.post("/", photoMiddleware(true), naturalPersonController.register);
/**
 * @swagger
 *
 * /person/natural:
 *   put:
 *     summary: Atualizar pessoa física
 *     description: Atualizar pessoa física
 *     tags: [Pessoa_fisica]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: formData
 *         name: photo
 *         description: Foto da pessoa
 *         required: false
 *         type: file
 *       - in: body
 *         name: update_natural_person
 *         description: Atualizar pessoa física
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               properties: 
 *                 person:
 *                   $ref: '#/components/schemas/Person'
 *                 reason:
 *                   $ref: '#/components/schemas/Reason'
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
naturalPersonRoutes.put("/", authentication.required, photoMiddleware(), naturalPersonController.update);


export default naturalPersonRoutes;