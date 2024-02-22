'use client';

import { Map, Settings2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, buttonVariants } from '../ui/button';

export const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className='flex gap-2 text-primary-foreground place-content-center'>
      <Link
        href='/'
        className={buttonVariants({
          size: 'icon',
          variant: pathname === '/' ? 'secondary' : 'ghost',
          className: 'rounded-xl',
        })}
      >
        <Map size={20} />
      </Link>
      <Link
        href='/basket'
        className={buttonVariants({
          size: 'icon',
          variant: pathname === '/basket' ? 'secondary' : 'ghost',
          className: 'rounded-xl',
        })}
      >
        <ShoppingBag size={20} />
      </Link>
      <Button size='icon' variant='ghost' className='rounded-xl'>
        <Settings2 size={20} />
      </Button>
    </div>
  );
};
