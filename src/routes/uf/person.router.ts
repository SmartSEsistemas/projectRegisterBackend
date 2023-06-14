import { Router } from 'express';
import ufController from '../../controllers/uf/UfController.js';

const routesUf = Router();
routesUf.get('/', ufController.show);

export default routesUf;
