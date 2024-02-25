import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';

import { FavoriteDialog } from '../global/FavoriteDialog';
import { NotificationDialog } from '../global/NotificationDialog';
import { UserNav } from '../global/UserNav';
import { Button } from '../ui/button';
import { NavItems } from './NavItems';

export const Navigation = () => {
  return (
    <nav className='grid grid-cols-3 mt-5 py-5 items-center'>
      <h1 className='text-2xl font-semibold text-primary-foreground font-shadow'>
        <Link href='/'>Peak</Link>
      </h1>

      <NavItems />

      <div className='flex place-content-end'>
        <div className='hidden md:flex items-center gap-2'>
          <UserNav />
          <FavoriteDialog />
          <NotificationDialog />
        </div>

        <Sheet>
          <SheetTrigger asChild className='flex md:hidden'>
            <Button variant='ghost' size='icon' className='rounded-xl'>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className='bg-white'>
            <UserNav />
            <FavoriteDialog />
            <NotificationDialog />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
