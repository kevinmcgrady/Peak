'use client';

import { MinusCircle, PlusCircle } from 'lucide-react';

import { cn } from '~/lib/utils';

type PropertyBookingGuestSelectProps = {
  typeOfGuest: string;
  ageRange: string;
  value: number;
  onMinusChange: () => void;
  onPlusChange: () => void;
  disableMinusButton: boolean;
  disablePlusButton: boolean;
};

export const PropertyBookingGuestSelect = ({
  typeOfGuest,
  ageRange,
  value,
  onMinusChange,
  onPlusChange,
  disableMinusButton,
  disablePlusButton,
}: PropertyBookingGuestSelectProps) => {
  return (
    <div className='flex justify-between items-center mb-5'>
      <div>
        <p className='text-sm text-muted font-semibold'>{typeOfGuest}</p>
        <p className='text-sm font-light'>{ageRange}</p>
      </div>
      <div className='flex items-center gap-3'>
        <MinusCircle
          onClick={onMinusChange}
          size={30}
          className={cn(
            'stroke-muted stroke-1 cursor-pointer hover:opacity-50',
            {
              'cursor-not-allowed opacity-50': disableMinusButton,
            },
          )}
        />
        <p className='text-sm font-semibold'>{value}</p>
        <PlusCircle
          onClick={onPlusChange}
          size={30}
          className={cn(
            'stroke-muted stroke-1 cursor-pointer hover:opacity-50',
            {
              'cursor-not-allowed opacity-50': disablePlusButton,
            },
          )}
        />
      </div>
    </div>
  );
};
