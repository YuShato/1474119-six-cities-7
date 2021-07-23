import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  AUTHORIZATION_INFO: 'user/authorizationInfo',
  CHANGE_CITY: 'places/changeCity',
  CHANGE_SORTING: 'places/changeSorting',
  GET_ACTIVE_PLACE: 'places/getActivePlace',
  LOAD_PLACES: 'data/loadPlaces',
  REDIRECT_TO_ROUTE: 'data/redirectToRoute',
  LOAD_FAVORITES_PLACES: 'data/loadFavoritesPlaces',
  LOAD_REVIEWS: 'data/loadReviews',
  RESET_IS_REVIEWS_LOADED: 'data/resetIsReviewsLoaded',
  UPDATE_FAVORITE_PLACE: 'data/updateFavoritePlace',
  LOAD_PROPERTY_DATA: 'data/loadPropertyData',
  LOAD_PROPERTY_NEARBY: 'data/loadPropertyNearby',
  SET_ERROR_MESSAGE: 'data/setErrorMessage',
  CHANGE_IS_FAVORITE_PROPERTY: 'data/changeIsFavoriteProperty',
  REQUIRED_AUTHORIZATION: 'user/requireAuthorization',
  SET_USER: 'user/setUser',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (selectedCity) => ({
  payload: selectedCity,
}));

export const changeSorting = createAction(ActionType.CHANGE_SORTING, (selectedSorting) => ({
  payload: selectedSorting,
}));

export const getActivePlace = createAction(ActionType.GET_ACTIVE_PLACE, (activePlaceId) => ({
  payload: activePlaceId,
}));

export const loadPlaces = createAction(ActionType.LOAD_PLACES, (places) => ({
  payload: places,
}));

export const loadFavoritesPlaces = createAction(ActionType.LOAD_FAVORITES_PLACES, (favoritesPlaces) => ({
  payload: favoritesPlaces,
}));

// export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
//   payload: status,
// }));
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (token) => ({
  payload: token,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const authorizationInfo = createAction(ActionType.AUTHORIZATION_INFO, (info) => ({
  payload: info,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const resetIsReviewsLoaded = createAction(ActionType.RESET_IS_REVIEWS_LOADED);

export const updateFavoritePlace = createAction(ActionType.UPDATE_FAVORITE_PLACE, (placeData) => ({
  payload: placeData,
}));

export const loadPropertyData = createAction(ActionType.LOAD_PROPERTY_DATA, (propertyData) => ({
  payload: propertyData,
}));

export const loadPropertyNearby = createAction(ActionType.LOAD_PROPERTY_NEARBY, (nearblyPlaces) => ({
  payload: nearblyPlaces,
}));

export const setErrorMessage = createAction(ActionType.SET_ERROR_MESSAGE, (message) => ({
  payload: message,
}));

export const changeIsFavoriteProperty = createAction(ActionType.CHANGE_IS_FAVORITE_PROPERTY);
