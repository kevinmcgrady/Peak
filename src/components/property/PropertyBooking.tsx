'use client';

import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useInView } from 'react-intersection-observer';

import { Select, SelectContent, SelectTrigger } from '~/components/ui/select';
import { getNumberOfNights, getShortDate } from '~/lib/date-formatting';
import { calculateFee, formatCurrency } from '~/lib/number-formatting';

import { SubNav } from '../global/SubNav';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { PropertyBookingGuestSelect } from './PropertyBookingPersonGuest';

type PropertyBookingProps = {
  pricePerNight: number;
  maxGuests: number;
};

export const PropertyBooking = ({
  pricePerNight,
  maxGuests,
}: PropertyBookingProps) => {
  const today = new Date();
  const { ref, inView } = useInView({ delay: 300 });

  const [noOfAdults, setNoOfAdults] = useState<number>(1);
  const [noOfChildren, setNoOfChildren] = useState<number>(0);
  const [noOfBabies, setNoOfBabies] = useState<number>(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 2),
  });

  const adultTitle = `${noOfAdults} ${noOfAdults === 1 ? 'Guest' : 'Guests'}`;
  const childrenTitle = `, ${noOfChildren} ${
    noOfChildren === 1 ? 'Child' : 'Children'
  }`;
  const babiesTitle = `, ${noOfBabies} ${noOfBabies === 1 ? 'Baby' : 'Babies'}`;

  const noOfNights = getNumberOfNights(
    dateRange?.to as Date,
    dateRange?.from as Date,
  );

  const priceForStay = pricePerNight * noOfNights;
  const fee = calculateFee(priceForStay);
  const total = priceForStay + fee;

  return (
    <>
      {!inView && (
        <div className='p-3 bg-white shadow-xl fixed top-0 right-0 left-0 z-50'>
          <div className='flex justify-between container items-center'>
            <SubNav
              items={[
                { text: 'Photos', scrollTo: 'photos' },
                { text: 'Amenities', scrollTo: 'amenities' },
                { text: 'Near by', scrollTo: 'nearBy' },
                { text: 'Location', scrollTo: 'location' },
                { text: 'Reviews', scrollTo: 'reviews' },
                {
                  text: 'Things you should know',
                  scrollTo: 'thingsYouShouldKnow',
                },
              ]}
            />

            <div className='flex items-center justify-center gap-x-2'>
              <p className='text-lg font-semibold'>
                {formatCurrency(pricePerNight)}
              </p>
              <span className='font-light'>night</span>
              <Button
                className='w-full rounded bg-gradient-to-tl from-[#00c6ff] to-[#0072ff]'
                variant='secondary'
                size='lg'
              >
                Book
              </Button>
            </div>
          </div>
        </div>
      )}

      <div ref={ref} className='p-10 border shadow-lg rounded-xl '>
        <p className='text-muted text-xl font-semibold mb-5'>
          {formatCurrency(pricePerNight)}{' '}
          <span className='font-light text-lg'>night</span>
        </p>
        <Select>
          <SelectTrigger className='rounded border-muted h-auto border-b-0 rounded-bl-none rounded-br-none'>
            <div className='grid grid-cols-2 w-full'>
              <div className='text-left'>
                <p className='text-muted font-semibold'>Check in</p>
                <p className='text-muted text-sm'>
                  {getShortDate(dateRange?.from)}
                </p>
              </div>
              <div className='text-left'>
                <p className='text-muted font-semibold'>Check out</p>
                <p className='text-muted text-sm'>
                  {getShortDate(dateRange?.to)}
                </p>
              </div>
            </div>
          </SelectTrigger>
          <SelectContent className='border rounded-xl bg-white shadow-lg p-2 text-muted w-fit'>
            <Calendar
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              mode='range'
              fromDate={today}
            />
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='rounded border-muted mb-5 h-auto rounded-tl-none rounded-tr-none'>
            <div className='flex flex-col items-start'>
              <p className='text-muted font-semibold'>Guests</p>
              <p className='text-muted text-sm'>
                {!!noOfAdults && adultTitle} {!!noOfChildren && childrenTitle}{' '}
                {!!noOfBabies && babiesTitle}
              </p>
            </div>
          </SelectTrigger>
          <SelectContent className='border bg-white shadow-lg rounded-xl p-2 text-muted w-fit'>
            <PropertyBookingGuestSelect
              typeOfGuest='Adults'
              ageRange='Age 13+'
              value={noOfAdults}
              disableMinusButton={noOfAdults === 1}
              disablePlusButton={noOfAdults + noOfChildren === maxGuests}
              onMinusChange={() =>
                setNoOfAdults((value) => {
                  if (value === 1) return value;
                  return value - 1;
                })
              }
              onPlusChange={() =>
                setNoOfAdults((value) => {
                  if (value + noOfChildren === maxGuests) return value;
                  return value + 1;
                })
              }
            />

            <PropertyBookingGuestSelect
              typeOfGuest='Children'
              ageRange='Ages 2-12'
              value={noOfChildren}
              disableMinusButton={noOfChildren === 0}
              disablePlusButton={noOfChildren + noOfAdults === maxGuests}
              onMinusChange={() =>
                setNoOfChildren((value) => {
                  if (value === 0) return value;
                  return value - 1;
                })
              }
              onPlusChange={() =>
                setNoOfChildren((value) => {
                  if (value + noOfAdults === maxGuests) return value;
                  return value + 1;
                })
              }
            />

            <PropertyBookingGuestSelect
              typeOfGuest='Babies'
              ageRange='Under 2'
              value={noOfBabies}
              disableMinusButton={noOfBabies === 0}
              disablePlusButton={noOfBabies === 5}
              onMinusChange={() =>
                setNoOfBabies((value) => {
                  if (value === 0) return value;
                  return value - 1;
                })
              }
              onPlusChange={() =>
                setNoOfBabies((value) => {
                  if (value === 5) return value;
                  return value + 1;
                })
              }
            />
          </SelectContent>
        </Select>

        <div className='flex items-center justify-between mb-5 text-sm'>
          <p className='text-sm text-muted-foreground'>
            {noOfNights} nights @ {formatCurrency(pricePerNight)} night
          </p>
          <p className='font-semibold'>{formatCurrency(priceForStay)}</p>
        </div>
        <div className='flex items-center justify-between mb-5 text-sm'>
          <p className='text-sm text-muted-foreground'>Service charge</p>
          <p className='font-semibold'>{formatCurrency(fee)}</p>
        </div>

        <hr className='mb-5' />

        <div className='flex items-center justify-between mb-5 text-sm'>
          <p className='text-lg'>Total</p>
          <p className='font-semibold text-lg'>{formatCurrency(total)}</p>
        </div>

        <Button
          className='w-full rounded mt-5 bg-gradient-to-tl from-[#00c6ff] to-[#0072ff]'
          variant='secondary'
          size='lg'
        >
          Book
        </Button>
      </div>
    </>
  );
};
