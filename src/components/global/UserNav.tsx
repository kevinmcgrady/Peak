import { currentUser,UserButton } from '@clerk/nextjs';
import Link from 'next/link';

import { cn } from '~/lib/utils';

import { buttonVariants } from '../ui/button';

export const UserNav = async () => {
  const user = await currentUser();
  return (
    <>
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
    </>
  );
};
