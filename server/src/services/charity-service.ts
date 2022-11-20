import * as userRepo from '@src/repos/user-repo';
import * as charityRepo from '@src/repos/charity-repo';
import { User, Charity } from '@prisma/client';
import { RouteError } from '@src/declarations/classes';
import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';
import { IReq } from '@src/routes/shared/types';

export const getAllCharities = async () => {
  return await charityRepo.getAllCharities();
};

export const getCharityById = async (id: string) => {
  return await charityRepo.getCharityById(id);
};

export const createCharity = async (charity: Charity, tags: string [], user: User) => {
  return await charityRepo.createCharity(charity, tags, user.id);
};

export const updateCharity = async (charity: Charity, tags: string [], user: User) => {
  return await charityRepo.updateCharity(charity, tags, user.id);
};

export const deleteCharity = async (id: string, user: User) => {
  return await charityRepo.deleteCharity(id, user.id);
};

export const searchCharities = async (search: string) => {
  return await charityRepo.getCharitiesMatchingSearch(search);
};