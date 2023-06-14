import { Router } from 'express';
import permissionController from '../../../controllers/access/permission/PermissionController.js';
import { permission } from '../../../middlewares/permissions.js';

const permissionRouter = Router();

permissionRouter.post('/', permission(['create_permission']), permissionController.register);
permissionRouter.put('/:name', permission(['update_permission']), permissionController.update);
permissionRouter.get('/', permission(['get_permission']), permissionController.list);
permissionRouter.get('/:name', permission(['get_permission']), permissionController.show);
permissionRouter.delete('/:name', permission(['delete_permission']), permissionController.delete);

export default permissionRouter;
