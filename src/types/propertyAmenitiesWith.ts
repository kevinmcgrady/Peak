import { Amenity, PropertyAmenity } from '@prisma/client';

export type PropertyAmenitiesWithAmenity = PropertyAmenity & {
  amenity: Amenity;
};
