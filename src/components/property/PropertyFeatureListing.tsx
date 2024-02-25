import {
  Dumbbell,
  ParkingSquare,
  PawPrint,
  Snowflake,
  Waves,
  Wifi,
} from 'lucide-react';

export const PropertyFeatureListing = () => {
  return (
    <ul className='grid grid-cols-2 gap-5 text-muted font-light'>
      <li>
        <p>
          <Waves size={18} className='inline-block mr-2' /> Swimming pool
        </p>
      </li>
      <li>
        <p>
          <Dumbbell size={18} className='inline-block mr-2' /> Gym
        </p>
      </li>
      <li>
        <p>
          <Wifi size={18} className='inline-block mr-2' /> Wifi
        </p>
      </li>
      <li>
        <p>
          <ParkingSquare size={18} className='inline-block mr-2' /> Free parking
        </p>
      </li>
      <li>
        <p>
          <Snowflake size={18} className='inline-block mr-2' /> Air conditioning
        </p>
      </li>
      <li>
        <p>
          <PawPrint size={18} className='inline-block mr-2' /> Pets allowed
        </p>
      </li>
    </ul>
  );
};
