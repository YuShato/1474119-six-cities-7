import moment from 'moment';
import { MAX_RATING, SortType } from './consts/consts';

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

export function setSorting (offer, sortType) {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offer.sort((a,b) => (a.price - b.price));
    case SortType.PRICE_HIGH:
      return offer.sort((a, b) => (b.price - a.price));
    case SortType.RATING_HIGH:
      return offer.sort((a,b) => (b.rating - a.rating));
    default:
      return offer;
  }
}
