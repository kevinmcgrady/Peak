import Image from 'next/image';
import { notFound } from 'next/navigation';

import { FeatureImageSlider } from '~/components/global/FeatureImageSlider';
import { MapComponent } from '~/components/global/Map/Map';
import { PropertyBooking } from '~/components/property/PropertyBooking';
import { PropertyFeatureListing } from '~/components/property/PropertyFeatureListing';
import { PropertyImageHeader } from '~/components/property/PropertyImageHeader';
import { PropertyReviewCard } from '~/components/property/PropertyReviewCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { findOneProperty } from '~/queries/properties';
import { getAllReviews } from '~/queries/reviews';

type PropertySlugPageProps = {
  params: {
    slug: string;
  };
};

const PropertySlugPage = async ({ params }: PropertySlugPageProps) => {
  const property = await findOneProperty(params.slug);

  if (!property) {
    return notFound();
  }

  const reviews = await getAllReviews(property.id);

  return (
    <div className='grid grid-cols-12 gap-10'>
      <div className='col-span-12'>
        <div className='hidden sm:block'>
          <PropertyImageHeader property={property} />
        </div>
        <div className='block sm:hidden'>
          <FeatureImageSlider
            title={property.title}
            subtitle={`£${property.pricePerNight} night`}
            isForMobile
          >
            {[
              <div key={property.imageUrl} className='relative h-[400px]'>
                <Image
                  src={`/images/${property.imageUrl}`}
                  alt={property.title}
                  fill
                  className='object-cover rounded-xl'
                />
              </div>,
              ...property.additionalImages.map((image) => (
                <div key={image} className='relative h-[400px]'>
                  <Image
                    src={`/images/${image}`}
                    alt={property.title}
                    fill
                    className='object-cover rounded-xl'
                  />
                </div>
              )),
            ]}
          </FeatureImageSlider>
        </div>
      </div>

      <div className='col-span-12 sm:col-span-7 space-y-10'>
        <div className='hidden sm:block'>
          <h1 className='text-muted text-4xl font-semibold mt-5'>
            {property.title}, {property.country}
          </h1>
          <p className='text-base text-muted-foreground font-light mt-2 mb-2'>
            {property.maxGuests} guests · {property.noOfBedrooms} bedrooms ·{' '}
            {property.noOfBeds} beds · {property.noOfBathrooms} bathrooms
          </p>
        </div>
        <p className='text-base text-muted'>{property.description}</p>

        <hr />

        <PropertyFeatureListing
          propertyTitle={property.title}
          amenities={property.PropertyAmenity}
          attractions={property.PropertyAttractions}
        />
      </div>

      <div className='col-span-12 sm:col-span-5 mt-5'>
        <div className='sticky top-5'>
          <PropertyBooking
            maxGuests={property.maxGuests}
            pricePerNight={property.pricePerNight}
          />
        </div>
      </div>

      <div className='mt-10 col-span-12'>
        <h2 className='text-muted text-xl font-semibold mb-10'>
          Where you&apos;ll be staying
        </h2>
        <div className='relative h-[400px]'>
          <MapComponent hideBookingCard property={property} />
        </div>
      </div>

      <div className='col-span-12 mt-10'>
        <h2 className='text-muted text-xl font-semibold mb-10'>
          What other people think
        </h2>
        {reviews && reviews.length && (
          <PropertyReviewCard
            propertyRating={property.rating}
            reviews={reviews}
          />
        )}
      </div>

      <div className='col-span-12 mb-10'>
        <h2 className='text-muted text-xl font-semibold mb-10'>
          Things you should know
        </h2>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Rules</AccordionTrigger>
            <AccordionContent>
              <div className='space-y-2'>
                <p className='text-muted-foreground'>Check in: 15:00</p>
                <p className='text-muted-foreground'>Check out: 11:00</p>
                <p className='text-muted-foreground'>6 guests max</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Saftey & Security</AccordionTrigger>
            <AccordionContent>
              <p className='text-muted-foreground'>
                All our properties are fitted with smoke alarms and a scurity
                alarm.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Cancellation policy</AccordionTrigger>
            <AccordionContent>
              <p className='text-muted-foreground'>
                This reservation is non-refundable.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PropertySlugPage;
