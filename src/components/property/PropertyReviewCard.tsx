import { Star } from 'lucide-react';

import { getShortDate } from '~/lib/date-formatting';
import { ReviewWithUser } from '~/types/reviewWith';

import { BackgroundCard } from '../global/BackgroundCard';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { PropertyRating } from './PropertyRating';

type PropertyReviewCardProps = {
  reviews: ReviewWithUser[];
  propertyRating: number;
};

const getUserInitials = (name: string) => {
  const splitUserName = name.split(' ');
  const splitFirstName = splitUserName[0].split('');
  const splitLastName = splitUserName[1].split('');

  return `${splitFirstName[0]} ${splitLastName[0]}`;
};

export const PropertyReviewCard = ({
  reviews,
  propertyRating,
}: PropertyReviewCardProps) => {
  return (
    <BackgroundCard>
      <PropertyRating rating={propertyRating} />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5'>
        {reviews.map((review) => (
          <div key={review.id}>
            <div className='flex items-center gap-x-2'>
              <Avatar>
                <AvatarImage />
                <AvatarFallback className='bg-white text-sm'>
                  {getUserInitials(review.user.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-semibold'>{review.user.name}</p>
                <p className='text-xs font-light'>
                  {getShortDate(review.createdAt)}
                </p>
              </div>
            </div>
            <div className='flex gap-2 items-center mt-2'>
              <div className='flex'>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className='stroke-none fill-muted'
                  />
                ))}
              </div>
            </div>
            <p className='text-sm text-muted mt-2'>{review.review}</p>
            <hr className='block sm:hidden border-[1px] mt-5' />
          </div>
        ))}
      </div>
      <Button variant='outline' className='rounded-xl self-start'>
        View all 16 reviews
      </Button>
    </BackgroundCard>
  );
};
