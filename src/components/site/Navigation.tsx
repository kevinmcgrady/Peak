import { Bell, Heart, Map, Settings2, ShoppingBag } from 'lucide-react';

import { Button } from '../ui/button';

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center mt-5 container sticky top-0 left-0 right-0 py-5 backdrop-blur-sm'>
      <h1 className='text-2xl font-semibold text-primary-foreground'>Peak</h1>
      <div className='flex gap-8 text-primary-foreground'>
        <Button size='icon' variant='secondary' className='rounded'>
          <Map size={20} />
        </Button>
        <Button size='icon' variant='ghost' className='rounded'>
          <ShoppingBag size={20} />
        </Button>
        <Button size='icon' variant='ghost' className='rounded'>
          <Settings2 size={20} />
        </Button>
      </div>
      <div className='flex gap-8'>
        <Button variant='ghost' size='icon' className='rounded'>
          <Heart size={20} />
        </Button>
        <Button variant='ghost' size='icon' className='rounded'>
          <Bell size={20} />
        </Button>
      </div>
    </nav>
  );
};
