import { AmenityType, AttractionType } from '@prisma/client';
import {
  Bike,
  Coffee,
  Dumbbell,
  Landmark,
  Mountain,
  ParkingSquare,
  PawPrint,
  Snowflake,
  Trees,
  Utensils,
  Waves,
  Wifi,
} from 'lucide-react';
import type React from 'react';

import { PropertyAmenitiesWithAmenity } from '~/types/propertyAmenitiesWith';
import { PropertyAttractionsWithAttraction } from '~/types/propertyAttractionsWith';

type PropertyFeatureListingProps = {
  attractions: PropertyAttractionsWithAttraction[];
  amenities: PropertyAmenitiesWithAmenity[];
  propertyTitle: string;
};

const attractionIcons: Record<AttractionType, React.ReactNode> = {
  BIKE_TRAIL: <Bike size={18} className='inline-block mr-2' />,
  CAFE: <Coffee size={18} className='inline-block mr-2' />,
  MOUNTAINS: <Mountain size={18} className='inline-block mr-2' />,
  MUSEUM: <Landmark size={18} className='inline-block mr-2' />,
  PARK: <Trees size={18} className='inline-block mr-2' />,
  RESTAURANTS: <Utensils size={18} className='inline-block mr-2' />,
};

const amenityIcons: Record<AmenityType, React.ReactNode> = {
  AIR_CONDITIONING: <Snowflake size={18} className='inline-block mr-2' />,
  FREE_PARKING: <ParkingSquare size={18} className='inline-block mr-2' />,
  GYM: <Dumbbell size={18} className='inline-block mr-2' />,
  PETS_ALLOWED: <PawPrint size={18} className='inline-block mr-2' />,
  SWIMMING_POOL: <Waves size={18} className='inline-block mr-2' />,
  WIFI: <Wifi size={18} className='inline-block mr-2' />,
};

export const PropertyFeatureListing = ({
  amenities,
  attractions,
  propertyTitle,
}: PropertyFeatureListingProps) => {
  return (
    <>
      <h2 className='text-muted text-xl font-semibold'>
        What {propertyTitle} has to offers
      </h2>
      <ul className='grid grid-cols-2 gap-5 text-muted font-light'>
        {amenities.map((amenity) => {
          const userFriendlyName = amenity.amenity.title
            .toLowerCase()
            .replace('_', ' ');

          return (
            <li key={amenity.id}>
              <p>
                {amenityIcons[amenity.amenity.title]}{' '}
                {userFriendlyName[0].toUpperCase()}
                {userFriendlyName.substring(1)}
              </p>
            </li>
          );
        })}
      </ul>
      <hr />
      <h2 className='text-muted text-xl font-semibold'>What is near by</h2>
      <ul className='grid grid-cols-2 gap-5 text-muted font-light'>
        {attractions.map((attraction) => {
          const userFriendlyName = attraction.attraction.title
            .toLowerCase()
            .replace('_', ' ');

          return (
            <li key={attraction.id}>
              <p>
                {attractionIcons[attraction.attraction.title]}{' '}
                {userFriendlyName[0].toUpperCase()}
                {userFriendlyName.substring(1)}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
