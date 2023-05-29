import { Router } from 'express';
import authentication from '../../middlewares/Authentication.js';
import accessRequestRouter from './accessRequest/accessRequest.router.js';
import recoverPasswordRouter from './recoverPassword/recoverPasswrod.router.js';
import loginRouter from './login/login.router.js';
const baseLoginRouter = Router();
baseLoginRouter.use('/access_request', authentication.required, accessRequestRouter);
baseLoginRouter.use('/recover', recoverPasswordRouter);
baseLoginRouter.use('/', loginRouter);
export default baseLoginRouter;
//# sourceMappingURL=baseLogin.router.js.map