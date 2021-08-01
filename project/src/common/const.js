export const MAX_PROPERTY_IMAGES = 6;
export const MAX_NUMBER_PIN = 3;
export const MAX_REVIEW_AMOUNT = -10;

export const ReviewData = {
  MIN_SIMBOL_REVIEW: 50,
  MAX_SIMBOL_REVIEW: 300,
  MAX_RATING: 5,
};

export const PlaceName = {
  MAIN: {
    type: 'MAIN',
    article: 'cities__place-card',
    image: {
      imageClass: 'cities__image-wrapper',
      width: 260,
      height: 200,
    },
    info: '',
  },
  NEAR: {
    type: 'NEAR',
    article: 'near-places__card',
    image: {
      imageClass: 'near-places__image-wrapper',
      width: 260,
      height: 200,
    },
    info: '',
  },
  FAVORITES: {
    type: 'FAVORITES',
    article: 'favorites__card',
    image: {
      imageClass: 'favorites__image-wrapper',
      width: 150,
      height: 110,
    },
    info: 'favorites__card-info',
  },
};

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Sorting = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  RATING: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNCNOWN: 'UNCNOWN',
};

export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  MAIN: '/',
  HOTELS: '/hotels',
  FAVORITE: '/favorite',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
  ERROR: '/error',
  OFFER: '/offer/:id',
  NEARBY: 'nearby',
};

export const ButtonTypes = {
  PLACE: {
    name: 'PLACE',
    noFavorite: 'place-card__bookmark-button',
    favorite: 'place-card__bookmark-button--active',
    icon: 'place-card__bookmark-icon',
    width: '18',
    height: '19',
  },
  PROPERTY: {
    name: 'PROPERTY',
    noFavorite: 'property__bookmark-button',
    favorite: 'property__bookmark-button--active',
    icon: 'property__bookmark-icon',
    width: '31',
    height: '33',
  },
};

export const HttpCode = {
  NOT_FOUND: 404,
  NOT_AUTH: 401,
};

export const  RatingData = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

export const UserMessage = {
  DEFAULT_ERROR: 'Something went wrong. Please try again later',
  CONNECTION_ERROR: 'Connection error. Please try again later',
  NOT_FOUND: 'Sorry. Page not found',
  SUCCESS: 'Good job! Thanks for your review!',
};

export const ColorMessage = {
  SUCCESS: 'green',
  ERROR: 'red',
};
