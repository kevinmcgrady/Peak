import { Attraction, PropertyAttractions } from '@prisma/client';

export type PropertyAttractionsWithAttraction = PropertyAttractions & {
  attraction: Attraction;
};
