/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { prisma } from '@src/server';
import { User, Post, Charity } from "@prisma/client";
import pwdUtil from "@src/util/pwd-util";
import jwtUtil from "@src/util/jwt-util";


// **** Functions **** //

export const getUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const getUserByHandle = async (handle: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      handle: handle,
    },
  });
};

export const createUser = async (user: User, password: string): Promise<User> => {
  return await prisma.user.create({
    data: {...user, hashedPass: pwdUtil.hashSync(password)},
  });
};

export const updateUser = async (user: User, password: string): Promise<User> => {
  return await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {...user, hashedPass: pwdUtil.hashSync(password)},
  });
};

export const deleteUser = async (id: string): Promise<User> => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

export const getAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const getUserByToken = async (token: string): Promise<User | null> => {
  return (await jwtUtil.decode(token)) as User ?? null;
};

export const getUserPosts = async (id: string): Promise<Post[] | null> => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  }).posts();
};

export const getUserCharities = async (id: string): Promise<Charity[] | null> => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  }).managedCharities();
};

export const getUserUpvotedPosts = async (id: string): Promise<Post[] | null> => {
  return await prisma.post.findMany({
    where: {
      votes: {
        some: {
          userId: id,
        },
      },
    },
  });
};

export const createUserToken = async (email: string, password: string): Promise<string | null> => {
  const user = await getUserByEmail(email);
  if (user && await pwdUtil.compare(password, user.hashedPass)) {
    const token = await jwtUtil.sign(user);
    await prisma.userTokens.create({
      data: {
        token: token,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return token;
  }
  return null;
};