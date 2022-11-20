/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { prisma } from '@src/server';
import { Charity } from "@prisma/client";


// **** Functions **** //

export const getCharityById = async (id: string): Promise<Charity | null> => {
  return await prisma.charity.findUnique({
    where: {
      id: id,
    },
  });
};

export const getCharityByHandle = async (handle: string): Promise<Charity | null> => {
  return await prisma.charity.findUnique({
    where: {
      handle: handle,
    },
  });
};

export const getCharitiesByMatchedTags = async (tags: string[]): Promise<Charity[] | null> => {
  return await prisma.charity.findMany({
    where: {
      tagsOnCharity: {
        some: {
          tag: {
            name: {
              in: tags,
            },
          },
        },
      },
    },
  });
};

export const getCharitiesMatchingSearch = async (search: string): Promise<Charity[] | null> => {
  return await prisma.charity.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
          },
        },
        {
          handle: {
            contains: search,
          },
        },
      ],
    },
  });
};

export const createCharity = async (charity: Charity, tags: string[], userId: string): Promise<Charity> => {

  const resultantCharity = await prisma.charity.create({
    data: { ...charity, managerId: userId },
  });
  await attachTagsToCharity(resultantCharity, tags);
  return resultantCharity;
};

export const updateCharity = async (charity: Charity, tags: string[]): Promise<Charity> => {
  const resultantCharity = await prisma.charity.update({
    where: {
      id: charity.id,
    },
    data: charity,
  });
  await attachTagsToCharity(resultantCharity, tags);
  return resultantCharity;
};

export const deleteCharity = async (id: string): Promise<Charity> => {
  return await prisma.charity.delete({
    where: {
      id: id,
    },
  });
};

// **** Helper Functions **** //

const attachTagsToCharity = async (resultantCharity: Charity, tags: string[]): Promise<void> => {
  // delete all tags on charity first

  await prisma.tagOnCharity.deleteMany({
    where: {
      charityId: resultantCharity.id,
    },
  });

  // populate tags on post
  for (const tag of tags) {
    await prisma.tagOnCharity.create({
      data: {
        tag: {
          connectOrCreate: {
            create: {
              color: Math.floor(Math.random() * 16777215).toString(16),
              name: tag,
            },
            where: {
              name: tag,
            },
          },
        },
        charity: {
          connect: {
            id: resultantCharity.id,
          },
        },
      },
    });
  }
};