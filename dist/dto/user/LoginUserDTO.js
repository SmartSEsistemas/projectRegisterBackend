import { z } from "zod";
export const loginUserSchema = z.object({
    document: z.string().nonempty(),
    password: z.string().nonempty()
});
//# sourceMappingURL=LoginUserDTO.js.map