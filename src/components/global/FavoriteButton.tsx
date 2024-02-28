'use client';

import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { cn } from '~/lib/utils';
import { toggleFavorite } from '~/queries/favorites';

import { useToast } from '../ui/use-toast';

type FavoriteButtonProps = {
  propertyId: string;
  color?: 'light' | 'dark';
  isFavorited?: boolean;
};

export const FavoriteButton = ({
  color = 'light',
  propertyId,
  isFavorited = false,
}: FavoriteButtonProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleOnClick = async () => {
    try {
      const response = await toggleFavorite(propertyId);
      router.refresh();
      toast({
        variant: 'default',
        description:
          response?.type && response.type === 'added'
            ? 'You can find this property in your favorites tab.'
            : 'This property has been removed from your favorites tab.',
        title:
          response?.type && response.type === 'added'
            ? 'Favorite Added'
            : 'Favorite Removed',
      });
    } catch (error) {
      toast({ variant: 'destructive', description: 'There was an issue' });
    }
  };

  return (
    <Heart
      onClick={handleOnClick}
      className={cn('cursor-pointer hover:opacity-50', {
        'stroke-white': color === 'light',
        'stroke-primary-foreground': color === 'dark',
        'fill-white': isFavorited && color === 'light',
        'fill-primary-foreground': isFavorited && color === 'dark',
      })}
      size={18}
    />
  );
};
