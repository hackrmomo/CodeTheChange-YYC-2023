/* eslint-disable @typescript-eslint/require-await */
import HttpStatusCodes from "@src/declarations/major/HttpStatusCodes";

import * as postService from "@src/services/post-service";
import { IReq, IRes } from "./shared/types";

// **** Variables **** //

// Paths
/* export const paths = {
  basePath: "/posts",
  get: "/all",
  add: "/add",
  update: "/update",
  delete: "/delete/:id",
} as const; */

// **** Functions **** //

export const index = async (req: IReq, res: IRes) => {
  const popularPosts = await postService.getPopularPosts();
  return res.status(HttpStatusCodes.OK).json({ popularPosts });
};

export const recentPosts = async (req: IReq, res: IRes) => {
  const recentPosts = await postService.getRecentPosts();
  return res.status(HttpStatusCodes.OK).json({ recentPosts });
}

