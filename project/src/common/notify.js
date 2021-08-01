import { toast } from 'react-toastify';

export const notify= (message, type) => {
  toast.configure();
  switch(type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
};
