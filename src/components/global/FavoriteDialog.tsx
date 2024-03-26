import { Heart } from 'lucide-react';

import { cn } from '~/lib/utils';
import { getUsersFavorites } from '~/queries/favorites';

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

export const FavoriteDialog = async () => {
  const favorites = await getUsersFavorites();
  const hasFavorites = favorites && favorites.length > 0;

  const description = !hasFavorites
    ? `You don't have any favorites yet!`
    : 'Your favorite properties';

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-xl'
          id='favoriteButton'
        >
          <Heart
            className={cn({
              'fill-primary-foreground': hasFavorites,
            })}
            size={20}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-white border rounded-xl'>
        <DialogHeader>
          <DialogTitle>Your favorites!</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {hasFavorites && (
          <ScrollArea className='h-72 '>
            {favorites.map((favorite) => (
              <PropertyFeatureCard
                isPropertyFavorited={true}
                key={favorite.id}
                property={favorite.property}
              />
            ))}
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};
