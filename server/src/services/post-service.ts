import { Post } from "@prisma/client";
import * as postRepo from "@src/repos/post-repo";

export const getPopularPosts = async (): Promise<Post[] | null> => {
  return await postRepo.getAllPosts();
  //   return await postRepo.getMostPopularPosts(10);
};

export const getRecentPosts = async (): Promise<Post[] | null> => {
  return await postRepo.getMostRecentPosts(10);
};
