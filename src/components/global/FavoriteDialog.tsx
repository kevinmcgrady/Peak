import { Heart } from 'lucide-react';

import { PropertyFeatureCard } from '../property/PropertyFeatureCard';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

export const FavoriteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-xl'>
          <Heart size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-white border rounded-xl'>
        <DialogHeader>
          <DialogTitle>Your favorites!</DialogTitle>
          <DialogDescription>Your favorite properties</DialogDescription>
        </DialogHeader>
        <ScrollArea className='h-72'>
          <PropertyFeatureCard
            distance='3.2'
            image={{ src: '/images/greece-hotel.jpg', alt: 'hotel' }}
            noOfReviews={10}
            pricePerNight='100'
            rating={4.9}
            title='jkfjkfer'
          />
          <PropertyFeatureCard
            distance='3.2'
            image={{ src: '/images/greece-hotel.jpg', alt: 'hotel' }}
            noOfReviews={10}
            pricePerNight='100'
            rating={4.9}
            title='jkfjkfer'
          />
          <PropertyFeatureCard
            distance='3.2'
            image={{ src: '/images/greece-hotel.jpg', alt: 'hotel' }}
            noOfReviews={10}
            pricePerNight='100'
            rating={4.9}
            title='jkfjkfer'
          />
          <PropertyFeatureCard
            distance='3.2'
            image={{ src: '/images/greece-hotel.jpg', alt: 'hotel' }}
            noOfReviews={10}
            pricePerNight='100'
            rating={4.9}
            title='jkfjkfer'
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
