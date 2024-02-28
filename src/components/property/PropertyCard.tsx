'use client';

import { Favorite, Property, User } from '@prisma/client';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { PropertyWithFavorites } from '~/types/propertyWith';

import { FavoriteButton } from '../global/FavoriteButton';
import { AspectRatio } from '../ui/aspect-ratio';
import { Badge } from '../ui/badge';

type PropertyCardProps = {
  property: PropertyWithFavorites;
  isPropertyFavorited?: boolean;
};

export const PropertyCard = ({
  property,
  isPropertyFavorited,
}: PropertyCardProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/?property=${property.slug}`, { scroll: false });
  };

  return (
    <div role='link' className='cursor-pointer' onClick={handleOnClick}>
      <AspectRatio className='bg-white rounded-xl'>
        <Image
          fill
          src={`/images/${property.imageUrl}`}
          alt={property.title}
          className='object-cover rounded-xl p-1 brightness-75'
        />

        <div className='z-10 absolute top-0 right-0 flex p-4 left-0 items-center justify-between'>
          <Badge variant='secondary'>
            <p className='font-semibold'>
              £{property.pricePerNight}{' '}
              <span className='font-light'>night</span>
            </p>
          </Badge>
          <FavoriteButton
            isFavorited={isPropertyFavorited}
            propertyId={property.id}
          />
        </div>
        <div className='z-10 absolute bottom-0 p-4'>
          <h3 className='text-lg text-white'>{property.title}</h3>
          <span className='text-white flex items-center gap-2'>
            <Star size={15} className='fill-white text-white' />
            {property.rating}
          </span>
        </div>
      </AspectRatio>
    </div>
  );
};
