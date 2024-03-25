// getAllReviews.test.js
import { expect,test, vi } from 'vitest';

import { getAllReviews } from './reviews';

vi.mock('../lib/db', () => ({
  db: {
    review: {
      findMany: vi.fn().mockImplementation(async ({ take, where }) => {
        const reviews = [
          {
            id: 1,
            propertyId: 'propertyId1',
            userId: 1,
            review: 'Review 1',
          },
          {
            id: 2,
            propertyId: 'propertyId1',
            userId: 2,
            review: 'Review 2',
          },
          {
            id: 3,
            propertyId: 'propertyId2',
            userId: 3,
            review: 'Review 3',
          },
        ];

        if (take) {
          return reviews.slice(0, take);
        }

        if (where.propertyId === 'nonExistingPropertyId') {
          return [];
        }

        return reviews;
      }),
    },
  },
}));

test('getAllReviews function should return all reviews for a property with user information', async () => {
  const reviews = await getAllReviews('propertyId1');

  expect(reviews.length).toBe(3);
  expect(reviews[0].review).toBe('Review 1');
  expect(reviews[0].userId).toBe(1);
});

test('getAllReviews function should return limited number of reviews when take parameter is provided', async () => {
  const reviews = await getAllReviews('propertyId1', 1);

  expect(reviews.length).toBe(1);
});

test('getAllReviews function should return an empty array if no reviews found', async () => {
  const reviews = await getAllReviews('nonExistingPropertyId');

  expect(reviews.length).toBe(0);
});
