import {ActionCreator} from './action';
import {AuthorizationStatus} from './api';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestOffers());

  api
    .get('/hotels')
    .then(({data}) => dispatch(ActionCreator.loadOffersSuccess(data)))
    .catch((e) => dispatch(ActionCreator.loadOffersFailure(e)));
};

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get('/login')
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)),
    )
    .catch(() => {});

export const login = ({login: email, password}) => (
  dispatch,
  _getState,
  api,
) =>
  api
    .post('/login', {email, password})
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)),
    );
