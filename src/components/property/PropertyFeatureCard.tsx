import { Heart, Star } from 'lucide-react';
import Image from 'next/image';

import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';

type PropertyFeatureCardProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  rating: number;
  distance: string;
  noOfReviews: number;
  pricePerNight: string;
};

export const PropertyFeatureCard = ({
  distance,
  image,
  noOfReviews,
  pricePerNight,
  rating,
  title,
}: PropertyFeatureCardProps) => {
  return (
    <div className='bg-white p-2 rounded-xl flex gap-x-2'>
      <div className='w-[200px]'>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className='object-cover rounded-xl'
          />
        </AspectRatio>
      </div>

      <div className='w-full space-y-2 flex flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-primary-foreground'>
            {title}
          </h2>
          <Heart size={18} className='inline-block text-primary-foreground' />
        </div>

        <p className='text-sm gap-x-1 text-primary-foreground flex'>
          <Star className='fill-primary inline-block stroke-none' size={18} />
          {rating}{' '}
          <span className='text-muted-foreground'>({noOfReviews})</span>{' '}
          {distance}km
        </p>

        <div className='flex items-center justify-between gap-x-2 pt-6'>
          <p className='text-sm'>
            <span className='text-base font-semibold text-primary-foreground'>
              £{pricePerNight}
            </span>
            /night
          </p>
          <Button size='sm' variant='secondary' className='rounded'>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
