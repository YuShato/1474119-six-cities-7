import moment from 'moment';
import { MAX_RATING } from './consts/consts';

export function getReviewDate(date) {
  return {
    userDate: moment(date).format('MMMM YYYY'),
    htmlDate:  moment(date).format('YYYY-MM-DD'),
  };
}

export function getRating(rating) {
  return rating/MAX_RATING*100;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getOffersByCity = (offers, cityName) =>
  offers.filter((offer) => offer.city.name === cityName);

export function filterOffers (city, places) {
  return places.filter((offer) => offer.city.name === city);
}
