/* eslint-disable @typescript-eslint/no-non-null-assertion */
import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import * as userService from '@src/services/user-service';
import * as charityService from '@src/services/charity-service';
import { Charity } from "@prisma/client";
import { IReq, IRes } from './shared/types';


// **** Variables **** //

// Paths
export const paths = {
  basePath: '/charities',
  get: '/all',
  one: '/:id',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
  search: '/search/:search',
} as const;


// **** Functions **** //

export const getAllCharities = async (_: IReq, res: IRes) => {
  const charities = await charityService.getAllCharities();
  return res.status(HttpStatusCodes.OK).json({ charities });
};

export const getCharity = async (req: IReq<{ id: string }>, res: IRes) => {
  const { id } = req.params;
  const charity = await charityService.getCharityById(id);
  return res.status(HttpStatusCodes.OK).json({ charity });
};

export const addCharity = async (req: IReq<{ charity: Charity, tags: string[] }>, res: IRes) => {
  const { charity, tags } = req.body;
  // validate token
  if (await userService.reqIsAuthenticated(req)) {

    const user = await userService.validateToken(req.headers.authorization!);
    if (!user) return res.status(HttpStatusCodes.UNAUTHORIZED).end();
    await charityService.createCharity(charity, tags, user);
    return res.status(HttpStatusCodes.CREATED).end();
  }
  return res.status(HttpStatusCodes.UNAUTHORIZED).end();
};

export const updateCharity = async (req: IReq<{ charity: Charity, tags: string[] }>, res: IRes) => {
  const { charity, tags } = req.body;
  // validate token
  if (await userService.reqIsAuthenticated(req)) {
    const user = await userService.validateToken(req.headers.authorization!);
    if (!user) return res.status(HttpStatusCodes.UNAUTHORIZED).end();
    await charityService.updateCharity(charity, tags, user);
    return res.status(HttpStatusCodes.OK).end();
  }
  return res.status(HttpStatusCodes.UNAUTHORIZED).end();
};

export const deleteCharity = async (req: IReq<{ id: string }>, res: IRes) => {
  const { id } = req.params;
  // validate token
  if (await userService.reqIsAuthenticated(req)) {
    const user = await userService.validateToken(req.headers.authorization!);
    if (!user) return res.status(HttpStatusCodes.UNAUTHORIZED).end();
    await charityService.deleteCharity(id, user);
    return res.status(HttpStatusCodes.OK).end();
  }
  return res.status(HttpStatusCodes.UNAUTHORIZED).end();
};

export const searchCharities = async (req: IReq<{ search: string }>, res: IRes) => {
  const { search } = req.params;
  const charities = await charityService.searchCharities(search);
  return res.status(HttpStatusCodes.OK).json({ charities });
};