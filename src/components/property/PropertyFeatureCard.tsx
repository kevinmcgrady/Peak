import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { formatCurrency } from '~/lib/number-formatting';
import { PropertyWithFavorites } from '~/types/propertyWith';

import { FavoriteButton } from '../global/FavoriteButton';
import { AspectRatio } from '../ui/aspect-ratio';
import { buttonVariants } from '../ui/button';

type PropertyFeatureCardProps = {
  property: PropertyWithFavorites;
  isPropertyFavorited?: boolean;
  displayFavoriteButton?: boolean;
};

export const PropertyFeatureCard = ({
  property,
  isPropertyFavorited = false,
  displayFavoriteButton = true,
}: PropertyFeatureCardProps) => {
  return (
    <div className='bg-white flex-col p-2 rounded-xl flex gap-x-2 md:flex-row'>
      <div className='w-full md:w-[200px]'>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={`/images/${property.imageUrl}`}
            alt={property.title}
            fill
            className='object-cover rounded-xl'
          />
        </AspectRatio>
      </div>

      <div className='w-full space-y-2 flex flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-primary-foreground'>
            {property.title}
          </h2>
          {displayFavoriteButton && (
            <FavoriteButton
              isFavorited={isPropertyFavorited}
              propertyId={property.id}
              color='dark'
            />
          )}
        </div>

        <p className='text-sm gap-x-1 text-primary-foreground flex'>
          <Star className='fill-primary inline-block stroke-none' size={18} />
          {property.rating} <span className='text-muted-foreground'>(7)</span>
        </p>

        <div className='flex items-center justify-between gap-x-2 pt-6'>
          <p className='text-sm'>
            <span className='text-base font-semibold text-primary-foreground'>
              {formatCurrency(property.pricePerNight)}
            </span>{' '}
            <span className='font-light'>night</span>
          </p>
          <Link
            href={`/property/${property.slug}`}
            className={buttonVariants({
              variant: 'secondary',
              className: '!rounded',
              size: 'sm',
            })}
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};
