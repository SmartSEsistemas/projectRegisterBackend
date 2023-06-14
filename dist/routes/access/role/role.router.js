import { Router } from 'express';
import roleController from '../../../controllers/access/role/RoleController.js';
import { permission } from '../../../middlewares/permissions.js';
const roleRouter = Router();
roleRouter.post('/', permission(['create_role']), roleController.register);
roleRouter.put('/', permission(['update_role']), roleController.update);
roleRouter.get('/', permission(['get_role']), roleController.list);
roleRouter.get('/:id', permission(['get_role']), roleController.show);
roleRouter.delete('/:id', permission(['delete_role']), roleController.delete);
export default roleRouter;
//# sourceMappingURL=role.router.js.map