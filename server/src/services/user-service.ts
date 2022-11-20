import * as userRepo from '@src/repos/user-repo';
import { User } from '@prisma/client';
import { RouteError } from '@src/declarations/classes';
import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';
import { IReq } from '@src/routes/shared/types';


// **** Variables **** //

export const userNotFoundErr = 'User not found';


// **** Functions **** //

export const loginWithUserEmailAndPassword = async (email: string, password: string)
  : Promise<{ user: User, token: string }> => {
  const userToken = await userRepo.createUserToken(email, password);
  if (!userToken) {
    throw new RouteError(HttpStatusCodes.UNAUTHORIZED, 'Invalid email or password');
  }
  const user = await userRepo.getUserByToken(userToken);
  if (!user) {
    throw new RouteError(HttpStatusCodes.UNAUTHORIZED, 'Invalid email or password');
  }
  return { user, token: userToken };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reqIsAuthenticated = async (req: IReq<any | void>): Promise<boolean> => {
  if (req.headers.authorization
    && req.headers.authorization.split(' ')[0] === 'Bearer'
    && await validateToken(req.headers["authorization"].split(' ')[1])) {
    return true;
  }
  return false;
};

export const validateToken = async (token: string): Promise<User> => {
  const user = await userRepo.getUserByToken(token);
  if (!user) {
    throw new RouteError(HttpStatusCodes.UNAUTHORIZED, 'Invalid token');
  }
  return user;
};

export const getAllUsers = async (): Promise<User[]> => {
  return await userRepo.getAllUsers();
};

export const createUser = async (user: User, password: string): Promise<User> => {
  return await userRepo.createUser(user, password);
};

export const updateUser = async (user: User, password: string): Promise<User> => {
  return await userRepo.updateUser(user, password);
};

export const deleteUser = async (id: string): Promise<User> => {
  return await userRepo.deleteUser(id);
};