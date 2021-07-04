import { INITIAL_CITY, SortType } from '../consts/consts';
import { ActionType } from './action';
import { filterOffers } from '../common';
import { AuthorizationStatus } from './api';

const initialState = {
  city: INITIAL_CITY,
  activeSort: SortType.POPULAR,
  activeOffer: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,

  offers: {
    data: null,
    loading: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.FILTERED_OFFERS:
      return {
        ...state,
        offers: filterOffers(state.city, initialState.offers),
      };

    case ActionType.SET_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };

    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
      };

    case ActionType.REMOVE_ACTIVE_OFFER:
      return {
        activeOffer: false,
      };

    case ActionType.OFFERS_REQUEST:
      return {
        ...state,
        offers: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case ActionType.OFFERS_SUCCESS:
      return {
        ...state,
        offers: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case ActionType.OFFERS_FAILURE:
      return {
        ...state,
        offers: {
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default:
      return state;
  }
};

export {reducer, initialState};
