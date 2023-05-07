import { ReasonDTO } from "../ReasonDTO";
import { OrganizationChartDTO } from "./OrganizationChartDTO";

export interface OrganizationChartUpdateDTO {
  organization_chart_id: number;
  organization_chart: Partial<OrganizationChartDTO>;
  reason: ReasonDTO;
}