'use server';

import { db } from '../db';

export const getAllProperties = async () => {
  return await db.property.findMany();
};

export const findOneProperty = (slug: string) => {
  return db.property.findUnique({
    where: {
      slug: slug,
    },
  });
};
