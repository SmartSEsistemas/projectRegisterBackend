import { Router } from "express";
import organizationChartController from "../controllers/OrganizationChartContoller.js"

const organizationChart = Router();

/**
 * @swagger
 * tags:
 *   name: Organograma
 *   description: Operações relacionadas aos organogramas
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       properties:
 *         organization_chart_config_id:
 *             type: number
 *         description:
 *             type: string
 *         nb_organogram:
 *             type: string
 *         admin_type_id:
 *             type: number
 *         year:
 *             type: number
 *         start_date:
 *             type: string
 *             format: date-time
 *         background_type_id:
 *             type: number
 *         subunit:
 *             type: boolean
 *     Resp_chart:
 *       type: object
 *       properties:
 *         organization_chart_config_id:
 *             type: number
 *         natural_person_id:
 *             type: number
 *         start_date:
 *             type: string
 *             format: date-time
 *         final_expected_date:
 *             type: string
 *             format: date-time
 *     Config_chart:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *         nb_config_organization_chart:
 *           type: string
 *         name_level_1:
 *           type: string
 *         name_level_2:
 *           type: string
 *         name_level_3:
 *           type: string
 *         name_level_4:
 *           type: string
 *         name_level_5:
 *           type: string
 *         name_level_6:
 *           type: string
 *         size_level_1:
 *           type: number
 *         size_level_2:
 *           type: number
 *         size_level_3:
 *           type: number
 *         size_level_4:
 *           type: number
 *         size_level_5:
 *           type: number
 *         size_level_6:
 *           type: number
 *         separator_level_1:
 *           type: string
 *         separator_level_2:
 *           type: string
 *         separator_level_3:
 *           type: string
 *         separator_level_4:
 *           type: string
 *         separator_level_5:
 *           type: string
 *         separator_level_6:
 *           type: string
 *         required_level_1:
 *           type: boolean
 *         required_level_2:
 *           type: boolean
 *         required_level_3:
 *           type: boolean
 *         required_level_4:
 *           type: boolean
 *         required_level_5:
 *           type: boolean
 *         required_level_6:
 *           type: boolean
 *         year:
 *           type: number
 *         start_date:
 *           type: string
 *           format: date-time
 *     Background:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *         nb_tce:
 *           type: string
 *         start_date:
 *           type: string
 *           format: date-time
 *         final_date:
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
 * /organization_chart:
 *   post:
 *     summary: Criar organograma
 *     description: Criar organograma
 *     tags: [Organograma]
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
 *         name: create_organization_chart
 *         description: Criar organograma
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Organization'
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
organizationChart.post("/", organizationChartController.registerOrganizationChart);
/**
 * @swagger
 *
 * /organization_chart:
 *   put:
 *     summary: Atualizar organograma
 *     description: Atualizar organograma
 *     tags: [Organograma]
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
 *         name: update_organization_chart
 *         description:  Atualizar organograma
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             organization_chart_id:
 *               type: number
 *             organization_chart:
 *               $ref: '#/components/schemas/Organization'
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
organizationChart.put("/", organizationChartController.updateOrganizationChart);
/**
 * @swagger
 *
 * /organization_chart/resp:
 *   post:
 *     summary: Vincular responsável
 *     description: Vincular responsável para um organograma
 *     tags: [Organograma]
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
 *         name: organization_chart_resp
 *         description:  Vincular responsável
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Rest_chart'
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
organizationChart.post("/resp", organizationChartController.registerOrganizationChartResp);
/**
 * @swagger
 *
 * /organization_chart/resp:
 *   put:
 *     summary: Atualizar responsável
 *     description: Atualizar responsável para um organograma
 *     tags: [Organograma]
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
 *         name: organization_chart_resp
 *         description:  Atualizar responsável
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *               resp_organization_chart_id:
 *                  type: number
 *               resp_organization_chart:
 *                  $ref: '#/components/schemas/Organization'
 *               reason:
 *                  $ref: '#/components/schemas/Reason'
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
organizationChart.put("/resp", organizationChartController.updateOrganizationChartResp);
/**
 * @swagger
 *
 * /organization_chart/config:
 *   post:
 *     summary: Configuração do organograma
 *     description: Configuração do organograma
 *     tags: [Organograma]
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
 *         name: organization_chart_config
 *         description: Configuração do organograma
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Config_chart'
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
organizationChart.post("/config", organizationChartController.registerOrganizationChartConfig);
/**
 * @swagger
 *
 * /organization_chart/background:
 *   post:
 *     summary: Tipo de fundo
 *     description: Tipo de fundo
 *     tags: [Organograma]
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
 *         name: background_type
 *         description: Tipo de fundo
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Background'
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
organizationChart.post("/background", organizationChartController.registerBackgroundType);






export default organizationChart;