'use client';

import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { toggleFavorite } from '~/lib/queries/favorites';
import { cn } from '~/lib/utils';

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
      await toggleFavorite(propertyId);
      router.refresh();
      toast({ variant: 'default', description: 'Favorite added!' });
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
