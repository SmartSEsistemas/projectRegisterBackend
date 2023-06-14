import { Router } from 'express';
import entityRouter from './entity/entity.router.js';
import legalNatureRouter from './legalNature/legalNature.router.js';
import entityTypeRouter from './entityType/entityType.router.js';
import respEntityRouter from './respEntity/entityType.router.js';
import authentication from '../../../middlewares/Authentication.js';
const baseEntityRouter = Router();
baseEntityRouter.use('/', entityRouter);
baseEntityRouter.use('/legal_natural', authentication.required, legalNatureRouter);
baseEntityRouter.use('/entity_type', authentication.required, entityTypeRouter);
baseEntityRouter.use('/resp_entity', authentication.required, respEntityRouter);
export default baseEntityRouter;
//# sourceMappingURL=baseEntity.router.js.map