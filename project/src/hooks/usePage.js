
import { useLocation } from 'react-router-dom';

export const usePage = () => {
  const location = useLocation();

  return {
    isFavorites: location.pathname === '/favorites',
    isMain: location.pathname === '/',
    isOffer: location.pathname === '/offer/:1',
  };
};
