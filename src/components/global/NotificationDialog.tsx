import { Bell } from 'lucide-react';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export const NotificationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-xl'>
          <Bell size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-white rounded-xl drop-shadow-lg'>
        <DialogHeader>
          <DialogTitle>Your Notifications!</DialogTitle>
          <DialogDescription>Your recent notifications</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
