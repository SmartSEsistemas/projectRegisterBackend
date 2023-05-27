import {z} from  'zod';
import isValidCNPJ from '../../../validators/isValidCNPJ.js';

export const legalPersonSchema = z.object({
  name: z.string(),
  corporate_name: z.string(),
  cnpj: z.string().refine((value) => isValidCNPJ(value), 'CNPJ inválido.'),
  opening_date: z.coerce.date(),
  nationality: z.string(),
  address_cep: z.string(),
  address_street: z.string(),
  address_nb: z.string(),
  address_complement: z.string().optional(),
  register_county_id: z.number(),
  state_uf_id: z.number(),
  email: z.string(),
  photo: z.string(),
  phone: z.string(),
  register_date : z.coerce.date()
})

export type LegalPersonDTO = z.infer<typeof legalPersonSchema>;