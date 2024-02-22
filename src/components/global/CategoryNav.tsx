import { Button } from '../ui/button';

type CategoryNavProps = {
  categories: string[];
};

export const CategoryNav = ({ categories = [] }: CategoryNavProps) => {
  return (
    <ul className='flex gap-2'>
      {categories.map((category) => (
        <li key={category}>
          <Button variant='ghost' size='sm' className='rounded text-xs'>
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};
