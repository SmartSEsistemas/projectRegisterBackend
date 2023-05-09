import { Router } from "express";
import legalPersonController from "../../controllers/LegalPersonController.js";
import authentication from "../../middlewares/Authentication.js";
import { photoMiddleware } from "../../middlewares/uploadPhoto.js";
const legalPersonRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Pessoa_juridica
 *   description: Operações relacionadas a pessoa jurídica
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         cnpj:
 *           type: string
 *         corporate_name:
 *           type: string
 *         register_date:
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
 * /person/legal:
 *   post:
 *     summary: Criar pessoa jurídica
 *     description: Criar pessoa jurídica
 *     tags: [Pessoa_juridica]
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
 *         description: Foto
 *         required: true
 *         type: file
 *       - in: body
 *         name: create_legal_person
 *         description: Criar pessoa jurídica
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
legalPersonRoutes.post("/", photoMiddleware(true), legalPersonController.register);
/**
 * @swagger
 *
 * /person/legal:
 *   put:
 *     summary: Atualizar pessoa jurídica
 *     description: Atualizar pessoa jurídica
 *     tags: [Pessoa_juridica]
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
 *         name: update_legal_person
 *         description: Atualizar pessoa jurídica
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
legalPersonRoutes.put("/", authentication.required, photoMiddleware(), legalPersonController.update);

export default legalPersonRoutes;