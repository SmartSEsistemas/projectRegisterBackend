import { ReasonDTO } from "../ReasonDTO";
import { OrganizationChartRespDTO } from "./OrganizationChartRestDTO";

export interface OrganizationChartRespUpdateDTO {
  resp_organization_chart_id: number;
  resp_organization_chart: Partial<OrganizationChartRespDTO>;
  reason: ReasonDTO;
}