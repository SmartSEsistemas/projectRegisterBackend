import { Router } from 'express';
import baseEntityRouter from './entity/baseEntity.router.js';
import baseOrganizationChart from './organizationChart/baseOrganizationChart.router.js';
import authentication from '../../middlewares/Authentication.js';

const baseEntityModuleRouter = Router();

baseEntityModuleRouter.use('/', baseEntityRouter);

baseEntityModuleRouter.use(
  '/organization_config',
  authentication.required,
  baseOrganizationChart,
);

export default baseEntityModuleRouter;
