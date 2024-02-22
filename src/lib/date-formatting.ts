import { format } from 'date-fns';

// Wed 3rd Feb 2024
export const getFullDate = (value?: Date) => {
  const date = value || new Date();
  return format(date, 'E io MMMM yyyy');
};

// March 19th, 2023
export const getShortDate = (value?: Date) => {
  const date = value || new Date();
  return format(date, 'PPP');
};
