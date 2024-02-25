import Image from 'next/image';

import { cn } from '~/lib/utils';
import { PropertyWithFavorites } from '~/types/propertyWith';

type PropertyImageHeaderProps = {
  property: PropertyWithFavorites;
  className?: string;
};

export const PropertyImageHeader = ({
  property,
  className,
}: PropertyImageHeaderProps) => {
  return (
    <div
      className={cn(
        'rounded-xl h-[400px] grid grid-cols-12 gap-x-2',
        className,
      )}
    >
      <div className='relative col-span-6'>
        <Image
          src={`/images/${property.imageUrl}`}
          alt={property.title}
          fill
          className='object-cover rounded-tl-xl rounded-bl-xl'
        />
      </div>
      <div className='grid grid-rows-2 gap-y-2 col-span-3'>
        <div className='relative'>
          <Image
            src={`/images/greece-hotel.jpg`}
            alt={property.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='relative'>
          <Image
            src={`/images/hall.jpg`}
            alt={property.title}
            fill
            className='object-cover'
          />
        </div>
      </div>
      <div className='grid grid-rows-2 gap-y-2 col-span-3'>
        <div className='relative'>
          <Image
            src={`/images/holiday-home.jpg`}
            alt={property.title}
            fill
            className='object-cover rounded-tr-xl'
          />
        </div>
        <div className='relative'>
          <Image
            src={`/images/see-view.jpg`}
            alt={property.title}
            fill
            className='object-cover rounded-br-xl'
          />
        </div>
      </div>
    </div>
  );
};
