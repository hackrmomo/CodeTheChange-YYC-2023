import { Router } from 'express';
import * as userRoutes from './user-routes';

// **** Setup user routes **** //

const userRouter = Router();

// **** Init **** //

const apiRouter = Router();

// Get all users
userRouter.get(userRoutes.paths.get, userRoutes.getAll);

// Add one user
userRouter.post(
  userRoutes.paths.add,
  userRoutes.add,
);

// Login with user email and password
userRouter.post(
  userRoutes.paths.login,
  userRoutes.login,
);

// Update one user
userRouter.put(
  userRoutes.paths.update,
  userRoutes.update,
);

// Delete one user
userRouter.delete(
  userRoutes.paths.delete,
  userRoutes._delete,
);

// Add userRouter
apiRouter.use(userRoutes.paths.basePath, userRouter);


// **** Export default **** //

export default apiRouter;
