import { z } from 'zod';
import { reasonSchema } from "../../reason/ReasonDTO.js";
import { naturalPersonSchema } from "./NaturalPersonDTO.js";
export const naturalPersonUpdadeSchema = z.object({
    person: naturalPersonSchema,
    reason: reasonSchema
});
//# sourceMappingURL=NaturalPersonUpdateDTO.js.map