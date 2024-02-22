import type React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

type FeatureImageSliderProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode[];
};

export const FeatureImageSlider = ({
  title,
  subtitle,
  children,
}: FeatureImageSliderProps) => {
  return (
    <Carousel>
      <div className='flex items-end justify-between mb-3'>
        <div>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <h3 className='text-sm text-muted-foreground'>{subtitle}</h3>
        </div>
        <div className='gap-2 flex'>
          <CarouselPrevious size='icon' variant='ghost' />
          <CarouselNext size='icon' variant='ghost' />
        </div>
      </div>
      <CarouselContent>
        {children.map((item, index) => (
          <CarouselItem key={index} className='basis-1/3'>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
