import moment from 'moment';
import { MAX_RATE } from './components/consts/consts';

export function getReviewDate(date) {
  return {
    userDate: moment(date).format('MMMM YYYY'),
    htmlDate:  moment(date).format('YYYY-MM-DD'),
  };
}

export function getRating(rating) {
  return rating/MAX_RATE*100;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
