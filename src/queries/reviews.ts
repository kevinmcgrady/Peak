'use server';

import { db } from '../lib/db';

export const getAllReviews = async (propertyId: string, take?: number) => {
  const reviews = db.review.findMany({
    where: {
      propertyId: propertyId,
    },
    include: {
      user: true,
    },
    take: take,
  });

  return reviews;
};
