import { BackgroundCard } from '~/components/global/BackgroundCard';
import { CategoryNav } from '~/components/global/CategoryNav';
import { FeatureImageSlider } from '~/components/global/FeatureImageSlider';
import { FilterNav } from '~/components/global/FilterNav';
import { SearchDatePicker } from '~/components/global/SearchDatePicker';
import { PropertyCard } from '~/components/property/PropertyCard';
import { PropertyFeatureCard } from '~/components/property/PropertyFeatureCard';
import { Hero } from '~/components/site/Hero';
import { getFullDate } from '~/lib/date-formatting';

export default function Home() {
  return (
    <main>
      <Hero
        title='Peak.'
        subtitle='Find your next breathtaking taking moment'
      />
      <div className='grid grid-cols-12 gap-4'>
        <div className='gap-y-5 flex flex-col col-span-7'>
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
                rating={5}
                title='Gostone'
                pricePerNight='300'
              />
              <PropertyCard
                image={{ url: '/images/greece-hotel.jpg', alt: 'Holiday Homw' }}
                rating={3.6}
                title='Hearty'
                pricePerNight='210'
              />
              <PropertyCard
                image={{ url: '/images/hall.jpg', alt: 'Holiday Homw' }}
                rating={4.9}
                title='Moonstar'
                pricePerNight='150'
              />
              <PropertyCard
                image={{ url: '/images/see-view.jpg', alt: 'Holiday Homw' }}
                rating={5.6}
                title='Firefly'
                pricePerNight='760'
              />
            </FeatureImageSlider>
          </BackgroundCard>
          <BackgroundCard>
            <FilterNav />
            <div className='grid grid-cols-2 gap-5'>
              <PropertyFeatureCard
                distance='2.5'
                image={{ src: '/images/holiday-home.jpg', alt: 'Holiday Home' }}
                noOfReviews={2}
                pricePerNight='300'
                rating={5.0}
                title='Gostone'
              />
              <PropertyFeatureCard
                distance='3.2'
                image={{ src: '/images/see-view.jpg', alt: 'Holiday Home' }}
                noOfReviews={4}
                pricePerNight='760'
                rating={5.6}
                title='Firefly'
              />
              <PropertyFeatureCard
                distance='1.5'
                image={{ src: '/images/greece-hotel.jpg', alt: 'Holiday Home' }}
                noOfReviews={18}
                pricePerNight='210'
                rating={3.6}
                title='Hearty'
              />
              <PropertyFeatureCard
                distance='6.7'
                image={{ src: '/images/hall.jpg', alt: 'Holiday Home' }}
                noOfReviews={7}
                pricePerNight='150'
                rating={4.9}
                title='Moonstar'
              />
            </div>
          </BackgroundCard>
        </div>
        <div className='col-span-5'>
          <BackgroundCard color='green'>
            <p>hello</p>
          </BackgroundCard>
        </div>
      </div>
    </main>
  );
}
