import { INITIAL_CITY, SortType } from '../consts/consts';
import { ActionType } from './action';
import { filterOffers } from '../common';


const initialState = {
  offers,
  city: INITIAL_CITY,
  activeSort: SortType.POPULAR,
  activeOffer: false,
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

    default:
      return state;
  }
};

export {reducer};
