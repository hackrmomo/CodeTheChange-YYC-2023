import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import * as tagService from '@src/services/tag-service';
import { Tag } from "@prisma/client";
import { IReq, IRes } from './shared/types';


// **** Variables **** //

// Paths
export const paths = {
  basePath: '/tags',
  get: '/all',
  add: '/add',
  search: '/search/:name',
} as const;


// **** Functions **** //

/**
 * Get all tags.
 */
export const getAll = async (_: IReq, res: IRes) => {
  const tags = await tagService.getAllTags();
  return res.status(HttpStatusCodes.OK).json({ tags });
};

/**
 * Add one tag.
 */
export const add = async (req: IReq<{ tag: Tag}>, res: IRes) => {
  const { tag } = req.body;
  const resultantTag = await tagService.createTag(tag);
  return res.status(HttpStatusCodes.CREATED).send(resultantTag).end();
};

/**
 * Search for tags by name.
 */
export const search = async (req: IReq<{ name: string }>, res: IRes) => {
  const { name } = req.params;
  const tags = await tagService.getTagsBySearch(name);
  return res.status(HttpStatusCodes.OK).json({ tags });
};