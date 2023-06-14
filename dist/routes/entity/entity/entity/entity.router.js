import { Router } from 'express';
import entityController from '../../../../controllers/entity/EntityController.js';
import { permission } from '../../../../middlewares/permissions.js';
import authentication from '../../../../middlewares/Authentication.js';
const entityRouter = Router();
entityRouter.post('/', authentication.required, permission(['create_entity']), entityController.register);
entityRouter.put('/', authentication.required, permission(['update_entity']), entityController.update);
entityRouter.get('/', entityController.show);
entityRouter.delete('/:id', authentication.required, permission(['delete_entity']), entityController.delete);
export default entityRouter;
//# sourceMappingURL=entity.router.js.map