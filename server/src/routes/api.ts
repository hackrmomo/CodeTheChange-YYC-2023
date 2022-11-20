import { Router } from "express";
import * as userRoutes from "./user-routes";
import * as postRoutes from "./post-routes";

// **** Setup user routes **** //

const userRouter = Router();

// **** Init **** //

const apiRouter = Router();

// Get all users
userRouter.get(userRoutes.paths.get, userRoutes.getAll);

// Add one user
userRouter.post(userRoutes.paths.add, userRoutes.add);

// Update one user
userRouter.put(userRoutes.paths.update, userRoutes.update);

// Delete one user
userRouter.delete(userRoutes.paths.delete, userRoutes._delete);

// Add userRouter
apiRouter.use(userRoutes.paths.basePath, userRouter);

const postRouter = Router();
postRouter.get("/trending", postRoutes.index);
postRouter.get("/newest", postRoutes.recentPosts);

postRouter.get("/:id");

apiRouter.use("/posts", postRouter);

// **** Export default **** //

export default apiRouter;
