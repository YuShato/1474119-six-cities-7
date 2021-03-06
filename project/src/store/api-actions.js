import {
  requireAuthorization,
  authorizationInfo,
  redirectToRoute,
  loadPlaces,
  loadFavoritesPlaces,
  loadReviews,
  updateFavoritePlace,
  loadPropertyData,
  loadPropertyNearby,
  setErrorMessage,
  loadErrorMessage
} from './action';
import {AuthorizationStatus, AppRoute, HttpCode, UserMessage, MessageType} from '../common/const';
import {adaptPlaceToClient, adaptReviewToClient} from './adapter';
import { notify } from '../common/notify';
import { submitFormError } from '../services/api';


export const fetchPlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => dispatch(loadPlaces(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {
      notify(UserMessage.DEFAULT_ERROR, MessageType.ERROR);
    })
);

export const fetchFavoritePlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE, {headers: {'X-token': localStorage.getItem('token')}})
    .then(({data}) => dispatch(loadFavoritesPlaces(data.map((favoritePlace) => adaptPlaceToClient(favoritePlace)))))
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN, {headers: {'X-token': localStorage.getItem('token')}})
    .then(({data}) => {
      dispatch(authorizationInfo(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password}, {}, {headers: {'X-token': localStorage.getItem('token')}})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(authorizationInfo(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {
      notify(UserMessage.CONNECTION_ERROR, MessageType.ERROR);
    })
);

export const logOut = () => (dispatch, _getState, api) => (
  api.delete(AppRoute.LOGOUT, {headers: {'X-token': localStorage.removeItem('token')}})
    .then(() => dispatch(authorizationInfo({})))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .then(() => localStorage.removeItem('token'))
    .catch(() => {})
);


export const fetchProperty = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${AppRoute.HOTELS}/${id}`),
    api.get(`${AppRoute.HOTELS}/${id}/nearby`),
  ])
    .then(([offer, nearby]) => {
      dispatch(loadPropertyData(adaptPlaceToClient(offer.data)));
      dispatch(loadPropertyNearby(nearby.data.map((nearbyOffer) => adaptPlaceToClient(nearbyOffer))));
    })
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.NOT_FOUND:
          notify(UserMessage.NOT_FOUND, MessageType.ERROR);
          dispatch(redirectToRoute(AppRoute.ERROR));
          break;

        default:
          notify(UserMessage.DEFAULT_ERROR, MessageType.ERROR);
          dispatch(setErrorMessage(response.status));
          break;
      }
    })
);

export const fetchPropertyReviews = (placeId) => (dispatch, _getState, api) => (
  api.get(`${AppRoute.COMMENTS}/${placeId}`, {headers: {'X-token': localStorage.getItem('token')}})
    .then(({data}) => dispatch(loadReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {
      notify(UserMessage.DEFAULT_ERROR, MessageType.ERROR);
    })
);

export const sendPropertyReview = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${AppRoute.COMMENTS}/${id}`, {rating, comment}, {headers: {'X-token': localStorage.getItem('token')}})
    .then(({data}) => dispatch(loadReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch((err) => {
      submitFormError(
        err, () => {
          dispatch(loadErrorMessage(UserMessage.CONNECTION_ERROR));
        },
      );
    })
);

export const changeFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`, {}, {headers: {'X-token': localStorage.getItem('token')}})
    .then(({data}) => (adaptPlaceToClient(data)))
    .then((data) => dispatch(updateFavoritePlace(data)))
);
