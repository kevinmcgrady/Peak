'use server';

import { currentUser } from '@clerk/nextjs';

import { db } from '../lib/db';

export const syncUser = async () => {
  const authUser = await currentUser();

  if (!authUser) return;

  const userAlreadyExists = await db.user.findUnique({
    where: {
      emailAddress: authUser.emailAddresses[0].emailAddress,
    },
  });

  if (!userAlreadyExists) {
    await db.user.create({
      data: {
        emailAddress: authUser.emailAddresses[0].emailAddress,
        name: `${authUser.firstName} ${authUser.lastName}`,
      },
    });
  }

  return;
};

export const getLoggedInUser = async () => {
  const authUser = await currentUser();

  if (!authUser) return null;

  const user = await db.user.findUnique({
    where: {
      emailAddress: authUser.emailAddresses[0].emailAddress,
    },
  });

  return user;
};
