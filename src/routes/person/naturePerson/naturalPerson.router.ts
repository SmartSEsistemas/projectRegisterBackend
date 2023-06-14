import { Router } from 'express';
import naturalPersonController from '../../../controllers/person/naturalPerson/NaturalPersonController.js';
import { photoMiddleware } from '../../../middlewares/uploadPhoto.js';
import { permission } from '../../../middlewares/permissions.js';

const naturalPersonRoutes = Router();

naturalPersonRoutes.post(
  '/',
  permission(['CREATE_NATURA_PERSON']),
  photoMiddleware(),
  naturalPersonController.register,
);

naturalPersonRoutes.put('/', photoMiddleware(), permission(['UPDATE_NATURA_PERSON']), naturalPersonController.update);

naturalPersonRoutes.get('/:cpf', permission(['GET_NATURA_PERSON']), naturalPersonController.show);

naturalPersonRoutes.delete('/:cpf', permission(['DELETE_NATURA_PERSON']), naturalPersonController.delete);

export default naturalPersonRoutes;
