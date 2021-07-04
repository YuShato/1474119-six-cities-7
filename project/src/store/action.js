export const ActionType = {
  CHANGE_CITY: 'cities/CHANGE_CITY',
  FILTERED_OFFERS: 'cities/FILTERED_OFFERS',
  SET_SORT: 'cities/SET_SORT',
  SET_ACTIVE_OFFER: 'cities/SET_ACTIVE_OFFER',
  REMOVE_ACTIVE_OFFER: 'cities/REMOVE_ACTIVE_OFFER',
  OFFERS_REQUEST: 'offers/request',
  OFFERS_SUCCESS: 'offers/success',
  OFFERS_FAILURE: 'offers/failure',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
};

const OfferActionCreator = {
  requestOffers: () => ({
    type: ActionType.OFFERS_REQUEST,
  }),
  loadOffersSuccess: (offers) => ({
    type: ActionType.OFFERS_SUCCESS,
    payload: offers,
  }),
  loadOffersFailure: (error) => ({
    type: ActionType.OFFERS_FAILURE,
    payload: error,
  }),
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  filteredOffers: (city) => ({
    type: ActionType.FILTERED_OFFERS,
    payload: city,
  }),

  setSort: (sort) => ({
    type: ActionType.SET_SORT,
    payload: sort,
  }),

  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id,
  }),

  removeActiveOffer: () => ({
    type: ActionType.REMOVE_ACTIVE_OFFER,
  }),

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  ...OfferActionCreator,
};
