import { BackgroundCard } from '../global/BackgroundCard';

export const Footer = () => {
  return (
    <BackgroundCard color='green' className='mb-5'>
      <footer>
        <div className='space-y-2'>
          <p className='text-2xl font-semibold text-primary-foreground font-shadow'>
            Peak.
          </p>
          <p className='text-sm text-primary-foreground'>
            Find your next breathtaking moment
          </p>
          <p className='text-sm text-muted-foreground'>
            &copy;Peak. All Rights Reserved. {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </BackgroundCard>
  );
};
