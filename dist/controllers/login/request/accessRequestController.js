import { AppMessage } from '../../../utils/AppMessage.js';
import { AccessRequestSchema } from '../../../dto/login/accessRequest/AccessRequestDTO.js';
import accessRequestService from '../../../services/login/accessRequest/AccessRequestService.js';
import { naturalPersonSchema } from '../../../dto/person/natural/NaturalPersonDTO.js';
import { legalPersonSchema } from '../../../dto/person/legal/LegalPersonDTO.js';
class AccessRequestController {
    async register({ body }, res) {
        const data = AccessRequestSchema.parse(body);
        const { person_data, ...update_data } = data;
        if ('cpf' in person_data) {
            const person = naturalPersonSchema.parse(person_data);
            await accessRequestService.naturalPerson(person, update_data);
        }
        else if ('cnpj' in person_data) {
            const person = legalPersonSchema.parse(person_data);
            await accessRequestService.legalPerson(person, update_data);
        }
        return res
            .status(201)
            .json(new AppMessage('Solicitação de acesso cadastrado com sucesso.', 201));
    }
}
export default new AccessRequestController();
//# sourceMappingURL=AccessRequestController.js.map