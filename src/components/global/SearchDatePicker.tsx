'use client';

import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { getShortDate } from '~/lib/date-formatting';

export const SearchDatePicker = () => {
  const [checkinDate, setCheckinDate] = useState<Date>();
  const [checkoutDate, setCheckoutDate] = useState<Date>();

  return (
    <div className='flex gap-1 items-end justify-between'>
      <div>
        <Label className='text-xs'>City</Label>
        <Input
          placeholder='Glasgow...'
          className='bg-white border-none rounded-tl-xl rounded-bl-xl'
        />
      </div>
      <div className='flex-1'>
        <Popover>
          <Label className='text-xs'>Check-in</Label>
          <PopoverTrigger asChild>
            <Button variant='ghost' className='w-full bg-white'>
              <CalendarIcon className='mr-2 h-4 w-4' />
              {checkinDate && getShortDate(checkinDate)}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={checkinDate}
              onSelect={setCheckinDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className='flex-1'>
        <Popover>
          <Label className='text-xs'>Check-out</Label>
          <PopoverTrigger asChild>
            <Button variant='ghost' className='w-full bg-white'>
              <CalendarIcon className='mr-2 h-4 w-4' />
              {checkoutDate && getShortDate(checkoutDate)}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={checkoutDate}
              onSelect={setCheckoutDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button variant='secondary' className='rounded-tr rounded-br'>
        Search
      </Button>
    </div>
  );
};
