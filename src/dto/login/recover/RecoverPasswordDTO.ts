import {z} from 'zod';
import isValidCPF from '../../../validators/isValidCPF.js';
import isValidCNPJ from '../../../validators/isValidCNPJ.js';

export const recoverSchema = z.object({
  document: z.string().refine((value) => {
    const cleanedValue = value.replace(/\D/g, '');
    if (cleanedValue.length === 11) return isValidCPF(cleanedValue);
    if (cleanedValue.length === 14) return isValidCNPJ(cleanedValue);
    return false;
  }, 'CPF ou CNPJ inválido'),
  email: z.string().email(),
  entity_id: z.number()
})

export type RecoverDTO = z.infer<typeof recoverSchema>;