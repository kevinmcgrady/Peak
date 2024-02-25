import { Favorite, Property } from '@prisma/client';

export type PropertyWithFavorites = Property & {
  Favorite: Favorite[];
};
