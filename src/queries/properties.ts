'use server';

import { db } from '../lib/db';

export const getAllProperties = async () => {
  return await db.property.findMany({
    include: {
      Favorite: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const findOneProperty = (slug: string) => {
  return db.property.findUnique({
    where: {
      slug: slug,
    },
    include: {
      Favorite: {
        include: {
          user: true,
        },
      },
    },
  });
};
