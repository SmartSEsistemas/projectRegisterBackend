import { z } from 'zod';

export const AccessRequestSchema = z.object({
  person_data: z.record(z.unknown()),
  entity: z.string(),
  password: z.string(),
  reason: z.enum(['USUARIO ADMINISTRATIVO', 'TRIBUTARIO', 'PROTOCOLO', 'OUVIDORIA']),
});

export type AccessRequestDTO = z.infer<typeof AccessRequestSchema>;
