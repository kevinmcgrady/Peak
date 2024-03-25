import { describe,expect, test, vi } from 'vitest';

import { getUsersFavorites, toggleFavorite } from './favorites';

const mocks = vi.hoisted(() => {
  return {
    getLoggedInUser: vi.fn().mockResolvedValue({ id: '1' }),
    db: {
      favorite: {
        findMany: vi.fn().mockResolvedValue([
          { id: 1, property: { title: 'Title One' } },
          { id: 2, property: { title: 'Title Two' } },
        ]),
        findFirst: vi.fn().mockImplementation(async ({ where }) => {
          if (
            where.userId === '1' &&
            where.propertyId === 'existingPropertyId'
          ) {
            return { propertyExists: true };
          } else {
            return null;
          }
        }),
        delete: vi.fn().mockResolvedValue({}),
        create: vi.fn().mockResolvedValue({}),
      },
    },
  };
});

vi.mock('./user', () => ({
  getLoggedInUser: mocks.getLoggedInUser,
}));

vi.mock('../lib/db', () => ({
  db: mocks.db,
}));

describe('getUsersFavorites', () => {
  test('getUsersFavorites function should return favorites for logged-in user', async () => {
    const favorites = await getUsersFavorites();

    expect(favorites && favorites.length).toBe(2);
    expect(favorites && favorites[0].property.title).toBe('Title One');
    expect(favorites && favorites[1].property.title).toBe('Title Two');
  });

  test('getUsersFavorites function should return null when no user is logged in', async () => {
    mocks.getLoggedInUser.mockResolvedValue(null);
    const favorites = await getUsersFavorites();

    expect(favorites).toBe(null);
  });
});

describe('toggleFavorite', () => {
  test('toggleFavorite function should add a favorite if it does not exist', async () => {
    mocks.getLoggedInUser.mockResolvedValue({ id: '1' });

    const result = await toggleFavorite('nonExistingPropertyId');
    expect(result && result.type).toBe('added');
  });

  test('toggleFavorite function should remove a favorite if it exists', async () => {
    mocks.getLoggedInUser.mockResolvedValue({ id: '1' });

    const result = await toggleFavorite('existingPropertyId');
    expect(result && result.type).toBe('removed');
  });

  test('toggleFavorite function should return null when no user is logged in', async () => {
    mocks.getLoggedInUser.mockResolvedValue(null);

    const result = await toggleFavorite('anyPropertyId');
    expect(result).toBe(null);
  });
});
