import { z } from 'zod';
export const entityTypeSchema = z.object({
    description: z.string(),
    nb_tce: z.string(),
    start_date: z.coerce.date(),
    final_date: z.coerce.date()
});
//# sourceMappingURL=EntityTypeDTO.js.map