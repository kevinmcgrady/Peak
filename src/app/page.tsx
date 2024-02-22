import { BackgroundCard } from '~/components/global/BackgroundCard';
import { CategoryNav } from '~/components/global/CategoryNav';
import { FeatureImageSlider } from '~/components/global/FeatureImageSlider';
import { SearchDatePicker } from '~/components/global/SearchDatePicker';
import { PropertyCard } from '~/components/property/PropertyCard';
import { Hero } from '~/components/site/Hero';
import { getFullDate } from '~/lib/date-formatting';

export default function Home() {
  return (
    <main>
      <Hero
        title='Peak.'
        subtitle='Find your next breathtaking taking moment'
      />
      <div className='grid grid-cols-2 gap-4'>
        <div className='gap-y-5 flex flex-col'>
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
              <PropertyCard
                image={{ url: '/images/holiday-home.jpg', alt: 'Holiday Homw' }}
                rating={4.9}
                title='Alps House'
              />
              <PropertyCard
                image={{ url: '/images/holiday-home.jpg', alt: 'Holiday Homw' }}
                rating={4.7}
                title='Alps House'
              />
              <PropertyCard
                image={{ url: '/images/holiday-home.jpg', alt: 'Holiday Homw' }}
                rating={4.0}
                title='Alps House'
              />
              <PropertyCard
                image={{ url: '/images/holiday-home.jpg', alt: 'Holiday Homw' }}
                rating={3.7}
                title='Alps House'
              />
            </FeatureImageSlider>
          </BackgroundCard>
          <BackgroundCard>hello</BackgroundCard>
        </div>

        <BackgroundCard color='green'>
          <p>hello</p>
        </BackgroundCard>
      </div>
    </main>
  );
}
