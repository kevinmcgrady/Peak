import { currentUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

import { cn } from '~/lib/utils';

import { FavoriteDialog } from '../global/FavoriteDialog';
import { NotificationDialog } from '../global/NotificationDialog';
import { buttonVariants } from '../ui/button';
import { NavItems } from './NavItems';

export const Navigation = async () => {
  const user = await currentUser();
  return (
    <nav className='grid grid-cols-3 mt-5 py-5'>
      <h1 className='text-2xl font-semibold text-primary-foreground font-shadow'>
        <Link href='/'>Peak</Link>
      </h1>
      <NavItems />
      <div className='flex gap-2 items-center place-content-end'>
        {user && <UserButton afterSignOutUrl='/' />}
        {!user && (
          <Link
            className={cn(
              buttonVariants({
                variant: 'secondary',
                className: 'rounded-xl',
              }),
            )}
            href='/sign-in'
          >
            Sign in
          </Link>
        )}
        <FavoriteDialog />
        <NotificationDialog />
      </div>
    </nav>
  );
};
