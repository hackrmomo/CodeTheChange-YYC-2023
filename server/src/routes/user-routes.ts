import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import * as userService from '@src/services/user-service';
import { User } from "@prisma/client";
import { IReq, IRes } from './shared/types';


// **** Variables **** //

// Paths
export const paths = {
  basePath: '/users',
  get: '/all',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
} as const;


// **** Functions **** //

/**
 * Get all users.
 */
export const getAll = async (_: IReq, res: IRes) => {
  const users = await userService.getAllUsers();
  return res.status(HttpStatusCodes.OK).json({ users });
};

/**
 * Add one user.
 */
export const add = async (req: IReq<{ user: User, password: string }>, res: IRes) => {
  const { user, password } = req.body;
  await userService.createUser(user, password);
  const userTokenCombo = (await userService.loginWithUserEmailAndPassword(user.email, password));
  return res.status(HttpStatusCodes.CREATED).send(userTokenCombo).end();
};

/**
 * Update one user.
 */
export const update = async (req: IReq<{ user: User, password: string }>, res: IRes) => {
  const { user, password } = req.body;
  if (await userService.reqIsAuthenticated(req)) {
    await userService.updateUser(user, password);
    return res.status(HttpStatusCodes.OK).end();
  }
  res.status(HttpStatusCodes.UNAUTHORIZED).end();
};

/**
 * Delete one user.
 */
export const _delete = async (req: IReq, res: IRes) =>{
  const id = req.params.id;
  if (await userService.reqIsAuthenticated(req)) {
    await userService.deleteUser(id);
    return res.status(HttpStatusCodes.OK).end();
  }
  res.status(HttpStatusCodes.UNAUTHORIZED).end();
};