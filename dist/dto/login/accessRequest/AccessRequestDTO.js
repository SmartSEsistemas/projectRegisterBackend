import { z } from 'zod';
export const AccessRequestSchema = z.object({
    person_data: z.record(z.unknown()),
    entity: z.string(),
    password: z.string(),
    reason: z.enum(['USUARIO ADMINISTRATIVO', 'TRIBUTARIO', 'PROTOCOLO', 'OUVIDORIA']),
});
//# sourceMappingURL=AccessRequestDTO.js.map