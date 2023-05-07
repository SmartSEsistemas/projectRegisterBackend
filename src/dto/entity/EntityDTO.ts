export interface EntityDTO {
  legal_person_id: number;
  legal_nature_id: number;
  email: string;
  phone: string;
  site: string;
  time_zone: string;
  rpps: boolean;
  plan_type: string;
  county_id: number;
  county_cod: string;
  entity_type_id: number;
  advisory: boolean;
  person_advisory_id: number;
  software_provider_person_id: number;
  software_version: string;
  date_institution: Date;
  creation_act: string;
  extinction_date: Date;
}