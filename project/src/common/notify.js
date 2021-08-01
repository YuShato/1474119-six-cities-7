import { toast } from 'react-toastify';

export const notify= (message) => {
  toast.configure();
  toast(message);
};
