import { Request, Response } from "express";
import organizationChartService from "../services/OrganizationChartService.js";

class OrganizationChart {
  async registerOrganizationChart(req: Request, res: Response) {
    await organizationChartService.createOrganizationChart(req.body);
    return res.status(201).json({ result: "Organograma criada." });
  }

  async updateOrganizationChart(req: Request, res: Response) {
    await organizationChartService.updateOrganizationChart(req.body);
    return res.status(200).json({ result: "Organograma atualizado." });
  }

  async registerOrganizationChartConfig(req: Request, res: Response) {
    await organizationChartService.createOrganizationChartConfig(req.body);
    return res.status(201).json({ result: "Configuranção do organograma criado." });
  }

  async registerBackgroundType(req: Request, res: Response) {
    await organizationChartService.createBrackgroundType(req.body);
    return res.status(201).json({ result: "Tipo de fundo criado." });
  }

  async registerOrganizationChartResp(req: Request, res: Response) {
    await organizationChartService.createOrganizationChartResp(req.body);
    return res.status(201).json({ result: "Responsável organograma criado." });
  }

  async updateOrganizationChartResp(req: Request, res: Response) {
    await organizationChartService.updateOrganizationChartResp(req.body);
    return res.status(200).json({ result: "Responsável organograma atualizado." });
  }
}

export default new OrganizationChart();