import { Select, SelectContent, SelectTrigger } from '~/components/ui/select';

import { Button } from '../ui/button';

type PropertyBookingProps = {
  pricePerNight: number;
};

export const PropertyBooking = ({ pricePerNight }: PropertyBookingProps) => {
  const priceForStay = pricePerNight * 6;
  const fee = (priceForStay / 100) * 3;
  const total = priceForStay + fee;

  return (
    <div className='p-10 border shadow-lg rounded-xl '>
      <p className='text-muted text-xl font-semibold mb-5'>
        £{pricePerNight} <span className='font-light text-lg'>night</span>
      </p>
      <Select>
        <SelectTrigger className='rounded border-muted mb-5 h-auto'>
          <div className='flex flex-col items-start'>
            <p className='text-muted font-semibold'>Guests</p>
            <p className='text-muted text-sm'>1 Guests</p>
          </div>
        </SelectTrigger>
        <SelectContent className='border bg-white shadow-lg rounded p-2 text-muted w-full'></SelectContent>
      </Select>
      <div className='flex items-center justify-between mb-5 text-sm'>
        <p>£{pricePerNight} x 6 days</p>
        <p className='font-semibold'>£{priceForStay}</p>
      </div>
      <div className='flex items-center justify-between mb-5 text-sm'>
        <p>Service charge</p>
        <p className='font-semibold'>£{fee}</p>
      </div>

      <hr className='mb-5' />

      <div className='flex items-center justify-between mb-5 text-sm'>
        <p>Total</p>
        <p className='font-semibold'>£{total}</p>
      </div>

      <Button
        className='w-full rounded mt-5 bg-gradient-to-tl from-[#00c6ff] to-[#0072ff]'
        variant='secondary'
      >
        Book
      </Button>
    </div>
  );
};
