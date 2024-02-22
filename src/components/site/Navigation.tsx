import { currentUser,UserButton } from '@clerk/nextjs';
import { Bell, Heart, Map, Settings2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

import { cn } from '~/lib/utils';

import { Button, buttonVariants } from '../ui/button';

export const Navigation = async () => {
  const user = await currentUser();
  return (
    <nav className='flex justify-between items-center mt-5 sticky top-0 left-0 right-0 py-5 backdrop-blur-sm z-10'>
      <h1 className='text-2xl font-semibold text-primary-foreground font-shadow'>
        <Link href='/'>Peak</Link>
      </h1>
      <div className='flex gap-2 text-primary-foreground'>
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
      <div className='flex gap-2 items-center'>
        {user && <UserButton afterSignOutUrl='/' />}

        {!user && (
          <Link
            className={cn(
              'rounded',
              buttonVariants({
                variant: 'outline',
              }),
            )}
            href='/sign-in'
          >
            Sign in
          </Link>
        )}

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
