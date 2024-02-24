import { notFound } from 'next/navigation';

import { BackgroundCard } from '~/components/global/BackgroundCard';
import { CategoryNav } from '~/components/global/CategoryNav';
import { FeatureImageSlider } from '~/components/global/FeatureImageSlider';
import { MapComponent } from '~/components/global/Map/Map';
import { SearchDatePicker } from '~/components/global/SearchDatePicker';
import { PropertyCard } from '~/components/property/PropertyCard';
import { PropertyFeatureCard } from '~/components/property/PropertyFeatureCard';
import { Hero } from '~/components/site/Hero';
import { getFullDate } from '~/lib/date-formatting';
import { findOneProperty, getAllProperties } from '~/lib/queries/properties';

type HomeProps = {
  searchParams: {
    property: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const properties = await getAllProperties();

  const mapProperty = await findOneProperty(
    searchParams.property || properties[0].slug,
  );

  if (!properties || !mapProperty) return notFound();

  return (
    <main>
      <Hero
        title='Peak.'
        subtitle='Find your next breathtaking taking moment'
      />
      <div className='grid grid-cols-12 gap-4'>
        <div className='gap-y-5 flex flex-col col-span-12 lg:col-span-7'>
          <BackgroundCard>
            <div className='flex items-center justify-between'>
              <CategoryNav categories={['Hotel', 'House', 'Village']} />
              <p className='text-sm font-semibold text-muted'>
                {getFullDate()}
              </p>
            </div>
            <SearchDatePicker />

            <FeatureImageSlider
              title='Suitable options'
              subtitle=' Recommended hotels in area'
            >
              {[
                ...properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                )),
              ]}
            </FeatureImageSlider>
          </BackgroundCard>
          <BackgroundCard>
            <div>
              <h2 className='text-xl font-semibold'>Popular Properties</h2>
              <h3 className='text-sm text-muted-foreground'>
                Properties with the highest rating
              </h3>
            </div>

            <div className='grid grid-cols-2 gap-5'>
              {properties.map((property) => (
                <PropertyFeatureCard key={property.id} property={property} />
              ))}
            </div>
          </BackgroundCard>
        </div>
        <div className='lg:col-span-5 col-span-12'>
          <MapComponent property={mapProperty} />
        </div>
      </div>
    </main>
  );
}
