export interface OrganizationChartDTO {
  organization_chart_config_id: number;
  description: string;
  nb_organogram: string;
  admin_type_id: number;
  year: number;
  start_date: Date;
  background_type_id: number;
  subunit: boolean;
}