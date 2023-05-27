import { z } from 'zod';
import isValidCPF from '../../../validators/isValidCPF.js';

export const naturalPersonSchema = z.object({
  name: z.string(),
  nb_rg: z.string(),
  organ_emission_rg: z.string(),
  register_uf_id: z.number(),
  date_emission_rg: z.coerce.date(),
  cnh: z.string().optional(),
  cpf: z.string().refine((value) => isValidCPF(value), 'CPF inválido.'),
  date_birth: z.coerce.date(),
  nationality: z.string(),
  address_cep: z.string(),
  address_street: z.string(),
  address_nb: z.string(),
  address_district: z.string(),
  address_complement: z.string().optional(),
  register_county_id: z.number(),
  state_uf_id: z.number(),
  email: z.string(),
  phone: z.string(),
  register_date: z.coerce.date()
})

export type NaturalPersonDTO = z.infer<typeof naturalPersonSchema>; 