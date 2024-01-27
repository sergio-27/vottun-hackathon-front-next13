import type { PrismaClient } from "@prisma/client";

///// ENDPOINT CREATE USER /////
export const createUser = async ({
  prisma,
  userName,
  email,
}: {
  prisma: PrismaClient;
  userName: string;
  email: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      username: userName,
    },
  });

  if (user) return {error: 1};

  const createdUser = await prisma.user.create({
    data: {
      username: userName,
      email: email,
      dni: "",
      walletAddress: ""
    },
  });

  return createdUser;
};

///// ENDPOINT CREATE USER /////
export const getUser = async ({
  prisma,
  email,
}: {
  prisma: PrismaClient;
  email: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};
///// ENDPOINT UPDATE USER /////
/*export const updateUser = async ({
  prisma,
  userAddress,
  userName,
  description,
  profileImage,
  bannerImage,
}: {
  prisma: PrismaClient;
  userAddress: string;
  userName: string;
  description: string;
  profileImage: string;
  bannerImage: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      address: userAddress,
    },
  });

  if (!user) throw new Error("User doesn't exist");

  const updateUser = await prisma.user.update({
    where: { address: userAddress },
    data: {
      userName: userName,
      description: description,
      profileImage: profileImage,
      bannerImage: bannerImage,
    },
  });

  return updateUser;
};

///// ENDPOINT DELETE USER /////
export const deleteUser = async ({
  prisma,
  userAddress,
}: {
  prisma: PrismaClient;
  userAddress: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      address: userAddress,
    },
  });

  if (!user) throw new Error("User doesn't exist");

  const deletedUser = await prisma.user.delete({
    where: { address: userAddress },
  });

  return deletedUser;
};

///// ENDPOINT GET USER /////
export const getUser = async ({
  prisma,
  address,
}: {
  prisma: PrismaClient;
  address: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      address: address,
    },
  });

  if (!user) throw new Error("Error on get user");
  return user;
};

///// ENDPOINT   /////

export const getUserListings = async ({
  prisma,
  userAddress,
}: {
  prisma: PrismaClient;
  userAddress: string;
}) => {
  const userListings = await prisma.user.findMany({
    where: {
      address: userAddress,
    },
  });

  if (userListings) throw new Error("Error on get user listings");

  return userListings;
};
*/