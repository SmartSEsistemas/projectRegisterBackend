import { z } from 'zod';
export const entitySchema = z.object({
    register_entity_type_id: z.number(),
    register_legal_person_id: z.number(),
    register_legal_nature_id: z.number(),
    coat_of_arms: z.string(),
    acronym: z.string(),
    address_street: z.string(),
    address_nb: z.string(),
    address_complement: z.string().optional(),
    address_cep: z.string(),
    register_county_id: z.number(),
    cod_county_ibge: z.string(),
    email: z.string(),
    phone: z.string(),
    site: z.string(),
    time_zone: z.string(),
    rpps: z.boolean(),
    plan_type: z.enum(["PREVIDENCIARIO", "FINANCEIRO"]).optional(),
    accounting_advice: z.boolean(),
    person_advisory_id: z.number().optional(),
    software_provider_person_id: z.number(),
    software_version: z.string(),
    entity_institution_date: z.coerce.date(),
    entity_creation_act: z.string(),
    extinction_date: z.coerce.date().optional(),
    nr_tce: z.string()
});
//# sourceMappingURL=EntityDTO.js.map