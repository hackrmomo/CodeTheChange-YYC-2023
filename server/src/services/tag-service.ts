import * as tagRepo from '@src/repos/tag-repo';
import { Tag } from '@prisma/client';
import { RouteError } from '@src/declarations/classes';
import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';


// **** Functions **** //

/**
 * Get all tags.
 */
export const getAllTags = async (): Promise<Tag[]> => {
  return await tagRepo.getAllTags();
};

/**
 * Get one tag by id.
 */
export const getTagById = async (id: string): Promise<Tag | null> => {
  return await tagRepo.getTagById(id);
};

/**
 * Get one tag by name.
 */
export const getTagByName = async (name: string): Promise<Tag | null> => {
  return await tagRepo.getTagByName(name);
};

/**
 * Get tags by name matching a string.
 */
export const getTagsBySearch = async (name: string): Promise<Tag[]> => {
  return await tagRepo.getTagsBySearch(name);
};

/**
 * Create a tag.
 */
export const createTag = async (tag: Tag): Promise<Tag> => {
  const existingTag = await tagRepo.getTagByName(tag.name);
  if (existingTag) {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, 'Tag already exists');
  }
  return await tagRepo.createTag(tag);
};