'use client';

import { Property } from '@prisma/client';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AspectRatio } from '../ui/aspect-ratio';
import { Badge } from '../ui/badge';

type PropertyCardProps = {
  property: Property;
};

export const PropertyCard = ({ property }: PropertyCardProps) => {
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
            <span className='font-semibold'>£{property.pricePerNight}</span>
            /night
          </Badge>
          <Heart className='stroke-white' size={18} />
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
