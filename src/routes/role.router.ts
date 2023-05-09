import { Router } from "express";
import roleController from "../controllers/RoleController.js";

const roleRouter = Router();
/**
* @swagger
 * tags:
 *   name: Role
 *   description: Operações relacionadas as roles
 */
/**
 * @swagger
 *
 * /role/:
 *   post:
 *     summary: Criar role
 *     description: Criar role
 *     tags: [Role]
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
 *         name: create_role
 *         description: Criar role
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                  type: string
 *               description:
 *                  type: string
 *               type:
 *                  type: string
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *       400:
 *         description: Error
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 */
roleRouter.post("/", roleController.register);
/**
 * @swagger
 *
 * /role/user_role:
 *   post:
 *     summary: Inserir role para um user
 *     description: Relacionar um role para um user
 *     tags: [Role]
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
 *         name: ref_user_role
 *         description: Referenciar role
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               role_id:
 *                  type: number
 *               user_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 *       400:
 *         description: Error
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *             message:
 *               type: string
 */
roleRouter.post("/user_role", roleController.registerUserRole);

export default roleRouter;