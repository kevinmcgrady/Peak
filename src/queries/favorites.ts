'use server';

import { db } from '../lib/db';
import { getLoggedInUser } from './user';

export const getUsersFavorites = async () => {
  const user = await getLoggedInUser();

  if (!user) return null;

  return db.favorite.findMany({
    where: {
      userId: user.id,
    },
    include: {
      property: {
        include: {
          Favorite: true,
        },
      },
    },
  });
};

export const toggleFavorite = async (
  propertyId: string,
): Promise<{ type: 'added' | 'removed' } | null> => {
  const user = await getLoggedInUser();

  if (!user) return null;

  const favoriteExists = await db.favorite.findFirst({
    where: {
      userId: user.id,
      propertyId: propertyId,
    },
  });

  if (favoriteExists) {
    await db.favorite.delete({
      where: {
        id: favoriteExists.id,
        userId: user.id,
        propertyId: propertyId,
      },
    });

    return { type: 'removed' };
  } else {
    await db.favorite.create({
      data: {
        propertyId: propertyId,
        userId: user.id,
      },
    });

    return { type: 'added' };
  }
};
