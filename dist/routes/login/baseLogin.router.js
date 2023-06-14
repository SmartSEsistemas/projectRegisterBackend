import { Router } from 'express';
import accessRequestRouter from './accessRequest/accessRequest.router.js';
import recoverPasswordRouter from './recoverPassword/recoverPasswrod.router.js';
import loginRouter from './login/login.router.js';
const baseLoginRouter = Router();
baseLoginRouter.use('/access_request', accessRequestRouter);
baseLoginRouter.use('/recover', recoverPasswordRouter);
baseLoginRouter.use('/', loginRouter);
export default baseLoginRouter;
//# sourceMappingURL=baseLogin.router.js.map