// getAllProperties.test.js
import { describe, expect, test, vi } from 'vitest';

import { findOneProperty,getAllProperties } from './properties';

vi.mock('../lib/db', () => ({
  db: {
    property: {
      findMany: vi.fn().mockResolvedValue([
        {
          id: 1,
          title: 'Property 1',
          Favorite: [
            {
              id: 1,
              userId: 1,
              user: {
                id: 1,
                name: 'User 1',
              },
            },
          ],
        },
        {
          id: 2,
          title: 'Property 2',
          Favorite: [],
        },
      ]),
      findUnique: vi.fn().mockImplementation(({ where }) => {
        if (where.slug === 'slug-exists') {
          return {
            id: 2,
            title: 'Property 1',
            Favorite: [],
          };
        }

        return null;
      }),
    },
  },
}));

describe('getAllProperties', () => {
  test('getAllProperties function should return all properties with favorites', async () => {
    const properties = await getAllProperties();

    expect(properties && properties.length).toBe(2);
    expect(properties && properties[0].title).toBe('Property 1');
    expect(properties && properties[0].Favorite.length).toBe(1);
    expect(properties && properties[0].Favorite[0].user.name).toBe('User 1');
  });

  test('getAllProperties function should return all properties without favorites', async (t) => {
    const properties = await getAllProperties();

    expect(properties && properties.length).toBe(2);
    expect(properties && properties[1].title).toBe('Property 2');
    expect(properties && properties[1].Favorite.length).toBe(0);
  });
});

describe('findOneProperty', () => {
  test('findOneProperty function should return one property', async () => {
    const property = await findOneProperty('slug-exists');

    expect(property).toBeTruthy();
    expect(property && property.title).toBe('Property 1');
  });

  test('findOneProperty function should return null if not property exists', async () => {
    const property = await findOneProperty('slug');

    expect(property).toBeFalsy();
  });
});
