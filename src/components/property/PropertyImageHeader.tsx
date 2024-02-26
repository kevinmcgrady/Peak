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
  const firstTwoImages = property.additionalImages.slice(0, 2);
  const thirdAndForthImages = property.additionalImages.slice(2, 4);

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
        {firstTwoImages.map((image) => (
          <div className='relative' key={image}>
            <Image
              src={`/images/${image}`}
              alt={property.title}
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>

      <div className='grid grid-rows-2 gap-y-2 col-span-3'>
        {thirdAndForthImages.map((image, index) => (
          <div className='relative' key={image}>
            <Image
              src={`/images/${image}`}
              alt={property.title}
              fill
              className={cn('object-cover', {
                'rounded-tr-xl': index === 0,
                'rounded-br-xl': index === 1,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
