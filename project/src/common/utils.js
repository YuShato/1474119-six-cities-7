import { Sorting, AppRoute, ReviewData } from './const';
import moment from 'moment';


export const getNumberStars = (rating) => `${rating / ReviewData.MAX_NUMBER_STARS * 100}%`;

export const getPlacesCity = (places, selectedCity) => places.filter((place) => place.city.name === selectedCity);

export const sortPlaces = (places, sortingType) => {
  switch (sortingType) {
    case Sorting.PRICE_LOW:
      return [...places].sort((a, b) => (a.price - b.price));
    case Sorting.PRICE_HIGH:
      return [...places].sort((a, b) => (b.price - a.price));
    case Sorting.RATING:
      return [...places].sort((a, b) => (b.rating - a.rating));
    default:
      return [...places];
  }
};

const deletePlace = (places, deletedPlace) => places.filter((place) => place.id !== deletedPlace.id);

export const updatePlaces = (places, updatedPlace) => {
  const offerIndex = places.findIndex((offer) => offer.id === updatedPlace.id);

  return [...places.slice(0, offerIndex),
    updatedPlace,
    ...places.slice(offerIndex + 1)];
};

export const changeFavoritePlaces = (places, updatedPlace) => updatedPlace.isFavorite ? [updatedPlace, ...places] : deletePlace(places, updatedPlace);

export const updateNearPlaces = (places, updatedPlaces) => {
  const index = places.findIndex((place) => place.id === updatedPlaces.id);

  if (index === -1) {
    return places;
  }

  return [...places.slice(0, index),
    updatedPlaces,
    ...places.slice(index + 1)];
};

export const getProperty = (id) => AppRoute.OFFER.replace(/:id/, id);

export function getReviewDate(date) {
  return {
    userDate: moment(date).format('MMMM YYYY'),
    htmlDate:  moment(date).format('YYYY-MM-DD'),
  };
}
