/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { prisma } from '@src/server';
import { Post } from "@prisma/client";


// **** Functions **** //

export const getPostById = async (id: string): Promise<Post | null> => {
  return await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
};

export const getPostsByMatchedTags = async (tags: string[]): Promise<Post[] | null> => {
  return await prisma.post.findMany({
    where: {
      tagsOnPost: {
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

export const getMostPopularPosts = async (limit: number): Promise<Post[] | null> => {
  return await prisma.post.findMany({
    include: {
      votes: true,
    },
    take: limit,
    orderBy: {
      votes: {
        _count: 'desc',
      },
    },
  });
};

export const getMostRecentPosts = async (limit: number): Promise<Post[] | null> => {
  return await prisma.post.findMany({
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createPost = async (post: Post, tags: string[]): Promise<Post> => {
  const resultantPost = await prisma.post.create({
    data: post,
  });
  await attachTagsToPost(resultantPost, tags);
  
  return resultantPost;
};

export const updatePost = async (post: Post, tags: string[]): Promise<Post> => {
  const resultantPost = await prisma.post.update({
    where: {
      id: post.id,
    },
    data: post,
  });

  await attachTagsToPost(resultantPost, tags);
  return resultantPost;
};

export const deletePost = async (id: string): Promise<Post> => {
  return await prisma.post.delete({
    where: {
      id: id,
    },
  });
};

export const getAllPosts = async (): Promise<Post[]> => {
  return await prisma.post.findMany();
};

// **** Helper Functions **** //

const attachTagsToPost = async (resultantPost: Post, tags: string[]): Promise<void> => {
  // delete all tags on post first

  await prisma.tagOnPost.deleteMany({
    where: {
      postId: resultantPost.id,
    },
  });

  // populate tags on post
  for (const tag of tags) {
    await prisma.tagOnPost.create({
      data: {
        tag: {
          connectOrCreate: {
            create: {
              color: Math.floor(Math.random()*16777215).toString(16),
              name: tag,
            },
            where: {
              name: tag,
            },
          },
        },
        post: {
          connect: {
            id: resultantPost.id,
          },
        },
      },
    });
  }
};