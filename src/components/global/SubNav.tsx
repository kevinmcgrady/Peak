'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Button } from '../ui/button';

type SubNavProps = {
  items: { text: string; scrollTo: string }[];
};

export const SubNav = ({ items }: SubNavProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`${pathName}#${id}`, { scroll: true });
  };

  return (
    <nav>
      <ul className='flex gap-2'>
        {items.map((item) => (
          <li key={item.text}>
            <Button
              variant='ghost'
              size='sm'
              className='rounded text-xs'
              onClick={() => handleClick(item.scrollTo)}
            >
              {item.text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
