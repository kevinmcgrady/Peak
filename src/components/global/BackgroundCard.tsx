import type React from 'react';

import { cn } from '~/lib/utils';

enum BackgroundColorMap {
  gray = 'bg-gray-100',
  green = 'bg-green-100',
}

type BackgroundCardProps = {
  color?: 'gray' | 'green';
  children: React.ReactNode;
};

export const BackgroundCard = ({
  color = 'gray',
  children,
}: BackgroundCardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-5 gap-y-5 flex flex-col',
        BackgroundColorMap[color],
      )}
    >
      {children}
    </div>
  );
};
