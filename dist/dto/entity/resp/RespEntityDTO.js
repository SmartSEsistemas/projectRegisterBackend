import { z } from 'zod';
export const respEntitySchema = z.object({
    register_entity_id: z.number(),
    register_natural_person_id: z.number(),
    start_date: z.coerce.date(),
    final_expected_date: z.coerce.date().optional()
});
//# sourceMappingURL=RespEntityDTO.js.map