import { z } from 'zod';
export const accessAuthorizationSchema = z.object({
    register_user_id: z.number(),
    register_permission_id: z.number(),
    approval_date: z.coerce.date(),
    register_entity_id: z.number()
});
//# sourceMappingURL=AccessAuthorizationDTO.js.map