import { Router } from "express";
import permissionController from "../controllers/PermissionController.js";
const permissionRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Permission
 *   description: Operações relacionadas as permissions
 */
/**
 * @swagger
 *
 * /permission/:
 *   post:
 *     summary: Criar permission
 *     description: Criar permission
 *     tags: [Permission]
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
 *         name: create_permission
 *         description: Criar permission
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               name:
 *                  type: string
 *               description:
 *                  type: string
 *               resource:
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
permissionRouter.post("/", permissionController.register);
/**
 * @swagger
 *
 * /permission/role_permission:
 *   post:
 *     summary: Vincular permission com role
 *     description: Vincular permission com role
 *     tags: [Permission]
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
 *         name: bind_permission
 *         description: Vincular permission
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *               permission_id:
 *                  type: number
 *               role_id:
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
permissionRouter.post("/role_permission", permissionController.registerRolePermission);


export default permissionRouter;