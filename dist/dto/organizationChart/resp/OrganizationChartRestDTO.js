import { z } from 'zod';
export const organizationChartRespSchema = z.object({
    register_organization_chart_id: z.number(),
    register_natural_person_id: z.number(),
    start_date: z.coerce.date(),
    final_expected_date: z.coerce.date()
});
//# sourceMappingURL=OrganizationChartRestDTO.js.map