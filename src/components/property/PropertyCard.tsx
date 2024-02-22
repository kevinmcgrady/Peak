import { Star } from 'lucide-react';
import Image from 'next/image';

import { AspectRatio } from '../ui/aspect-ratio';

type PropertyCardProps = {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  rating: number;
};

export const PropertyCard = ({ image, rating, title }: PropertyCardProps) => {
  return (
    <AspectRatio className='bg-white rounded-xl'>
      <Image
        fill
        src={image.url}
        alt={image.alt}
        className='object-cover rounded-xl p-1'
      />

      <div className='z-10 absolute bottom-0 p-4'>
        <h3 className='text-lg text-white'>{title}</h3>
        <span className='text-white flex items-center gap-2'>
          <Star size={15} className='fill-white text-white' />
          {rating}
        </span>
      </div>
    </AspectRatio>
  );
};
