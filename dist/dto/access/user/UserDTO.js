import { z } from "zod";
export const userSchema = z.object({
    password: z.string(),
    document: z.string(),
    type_person: z.enum(["LEGAL", "NATURAL"]),
    register_person_id: z.number(),
    active: z.boolean(),
    start_date: z.coerce.date(),
    final_date: z.coerce.date(),
    register_entity_id: z.number(),
    register_permission_id: z.number()
});
//# sourceMappingURL=UserDTO.js.map