import { prisma } from '@src/server';
import { Tag } from "@prisma/client";

// **** Functions **** //

export const getAllTags = async (): Promise<Tag[]> => {
  return await prisma.tag.findMany();
};

export const getTagById = async (id : string) : Promise<Tag | null> => {
  return await prisma.tag.findUnique({
    where: {
      id: id,
    },
  });
};

export const getTagByName = async (name : string) : Promise<Tag | null> => {
  return await prisma.tag.findUnique({
    where: {
      name: name,
    },
  });
};

export const createTag = async (tag : Tag) : Promise<Tag> => {
  return await prisma.tag.create({
    data: {...tag, color: tag.color || Math.floor(Math.random()*16777215).toString(16)},
  });
};

export const getTagsBySearch = async (name : string) : Promise<Tag[]> => {
  return await prisma.tag.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
};