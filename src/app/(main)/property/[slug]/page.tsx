import { Star } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { BackgroundCard } from '~/components/global/BackgroundCard';
import { FeatureImageSlider } from '~/components/global/FeatureImageSlider';
import { PropertyFeatureListing } from '~/components/property/PropertyFeatureListing';
import { PropertyImageHeader } from '~/components/property/PropertyImageHeader';
import { PropertyRating } from '~/components/property/PropertyRating';
import { findOneProperty } from '~/queries/properties';

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

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12'>
        <div className='hidden sm:block'>
          <PropertyImageHeader property={property} />
        </div>
        <div className='block sm:hidden'>
          <FeatureImageSlider
            title={property.title}
            subtitle='bjhfgrfghrf'
            isForMobile
          >
            <div className='relative h-[400px]'>
              <Image
                src={`/images/${property.imageUrl}`}
                alt={property.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='relative h-[400px]'>
              <Image
                src={`/images/${property.imageUrl}`}
                alt={property.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='relative h-[400px]'>
              <Image
                src={`/images/${property.imageUrl}`}
                alt={property.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='relative h-[400px]'>
              <Image
                src={`/images/${property.imageUrl}`}
                alt={property.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='relative h-[400px]'>
              <Image
                src={`/images/${property.imageUrl}`}
                alt={property.title}
                fill
                className='object-cover'
              />
            </div>
          </FeatureImageSlider>
        </div>
      </div>

      <div className='col-span-7 mt-5 space-y-5'>
        <h1 className='text-muted text-4xl font-semibold'>{property.title}</h1>
        <p className='text-base text-muted'>{property.description}</p>

        <hr />

        <h2 className='text-muted text-xl font-semibold'>
          What {property.title} has to offers
        </h2>

        <PropertyFeatureListing />

        <hr />

        <h2 className='text-muted text-xl font-semibold'>What is near by</h2>

        <PropertyFeatureListing />
      </div>

      <div className='col-span-5 mt-5'>booking thing</div>

      <div className='col-span-12 mt-5 space-y-5'>
        <hr />
        <PropertyRating rating={property.rating} />
        <BackgroundCard>
          <div></div>
        </BackgroundCard>
      </div>
    </div>
  );
};

export default PropertySlugPage;
