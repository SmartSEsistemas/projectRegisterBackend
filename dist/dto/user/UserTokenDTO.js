import { z } from "zod";
export const userTokenSchema = z.object({
    document: z.string().nonempty(),
    type_person: z.enum(["NATURAL", "LEGAL"])
});
//# sourceMappingURL=UserTokenDTO.js.map