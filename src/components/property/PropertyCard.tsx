'use client';

import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AspectRatio } from '../ui/aspect-ratio';
import { Badge } from '../ui/badge';

type PropertyCardProps = {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  rating: number;
  pricePerNight: string;
  lat: string;
  lng: string;
};

export const PropertyCard = ({
  image,
  rating,
  title,
  pricePerNight,
  lat,
  lng,
}: PropertyCardProps) => {
  const router = useRouter();

  const handleOnClick = (e: any) => {
    router.push(`/?lat=${lat}&lng=${lng}`, { scroll: false });
  };

  return (
    <div
      role='link'
      className='cursor-pointer'
      onClick={(e) => handleOnClick(e)}
    >
      <AspectRatio className='bg-white rounded-xl'>
        <Image
          fill
          src={image.url}
          alt={image.alt}
          className='object-cover rounded-xl p-1 brightness-75'
        />

        <div className='z-10 absolute top-0 right-0 flex p-4 left-0 items-center justify-between'>
          <Badge variant='secondary'>
            <span className='font-semibold'>£{pricePerNight}</span>/night
          </Badge>
          <Heart className='stroke-white' size={18} />
        </div>
        <div className='z-10 absolute bottom-0 p-4'>
          <h3 className='text-lg text-white'>{title}</h3>
          <span className='text-white flex items-center gap-2'>
            <Star size={15} className='fill-white text-white' />
            {rating}
          </span>
        </div>
      </AspectRatio>
    </div>
  );
};
