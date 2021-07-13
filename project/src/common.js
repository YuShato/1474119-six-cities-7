import moment from 'moment';
import { MAX_RATING } from './const';

export function getReviewDate(date) {
  return {
    userDate: moment(date).format('MMMM YYYY'),
    htmlDate:  moment(date).format('YYYY-MM-DD'),
  };
}

export const getSorting = (offers, sortOption) => {
  switch (sortOption.id) {
    case 'price-from-low':
      return offers.sort((a, b) => a.price - b.price);
    case 'price-from-high':
      return offers.sort((a, b) => b.price - a.price);
    case 'price-top-rated':
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export function getRating(rating) {
  return rating/MAX_RATING*100;
}
