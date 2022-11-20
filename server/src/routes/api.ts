import { Router } from 'express';
import * as userRoutes from './user-routes';
import * as tagRoutes from './tag-routes';
import * as charityRoutes from './charity-routes';

// **** Setup user routes **** //

const userRouter = Router();
const tagRouter = Router();
const charityRouter = Router();

// **** Init **** //

const apiRouter = Router();

// User routes
userRouter.get(userRoutes.paths.get, userRoutes.getAll);
userRouter.post(userRoutes.paths.add, userRoutes.add);
userRouter.post(userRoutes.paths.login, userRoutes.login);
userRouter.post(userRoutes.paths.refresh,userRoutes.refresh);
userRouter.put(userRoutes.paths.update, userRoutes.update);
userRouter.delete(userRoutes.paths.delete, userRoutes._delete);

// tag routes
tagRouter.get(tagRoutes.paths.get, tagRoutes.getAll);
tagRouter.post(tagRoutes.paths.add, tagRoutes.add);
tagRouter.get(tagRoutes.paths.search, tagRoutes.search);

// charity routes
charityRouter.get(charityRoutes.paths.get, charityRoutes.getAllCharities);
charityRouter.get(charityRoutes.paths.search, charityRoutes.searchCharities);
charityRouter.get(charityRoutes.paths.one, charityRoutes.getCharity);
charityRouter.post(charityRoutes.paths.add, charityRoutes.addCharity);
charityRouter.put(charityRoutes.paths.update, charityRoutes.updateCharity);
charityRouter.delete(charityRoutes.paths.delete, charityRoutes.deleteCharity);

// Add userRouter
apiRouter.use(userRoutes.paths.basePath, userRouter);

// Add tagRouter
apiRouter.use(tagRoutes.paths.basePath, tagRouter);

// Add charityRouter
apiRouter.use(charityRoutes.paths.basePath, charityRouter);


// **** Export default **** //

export default apiRouter;
