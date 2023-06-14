import { Router } from 'express';
import accessRequestController from '../../../controllers/login/request/AccessRequestController.js';

const accessRequestRouter = Router();

accessRequestRouter.post('/', accessRequestController.register);

export default accessRequestRouter;
