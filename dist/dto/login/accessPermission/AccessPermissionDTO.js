import { z } from 'zod';
import { naturalPersonUpdadeSchema } from '../../person/natural/NaturalPersonUpdateDTO.js';
import { legalNatureSchema } from '../../entity/legalNature/LegalNatureDTO.js';
export const accessPermissionSchema = z.object({
    person_data: z.union([naturalPersonUpdadeSchema, legalNatureSchema]),
    password: z.string(),
    reason: z.string()
});
//# sourceMappingURL=AccessPermissionDTO.js.map