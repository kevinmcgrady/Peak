import { Star } from 'lucide-react';

type PropertyRatingProps = {
  rating: number;
};

export const PropertyRating = ({ rating }: PropertyRatingProps) => {
  const message = [4, 5].includes(rating) ? 'Guest Favorite' : `Good`;

  return (
    <div>
      <div className='flex items-center justify-center'>
        <p className='text-6xl text-muted font-semibold text-center'>
          {rating}
        </p>
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={18} className='stroke-none fill-muted' />
        ))}
      </div>
      <p className='text-center text-muted font-medium'>{message}</p>
    </div>
  );
};
