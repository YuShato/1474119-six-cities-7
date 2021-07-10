export const MAX_RATING = 5;

export const OFFERS_RENTAL_LIMIT = 3;

export const SORT_LIST = [
  {
    id: 'default',
    title: 'Popular',
  },
  {
    id: 'price-from-low',
    title: 'Price: low to high',
  },
  {
    id: 'price-from-high',
    title: 'Price: high to low',
  },
  {
    id: 'price-top-rated',
    title: 'Top rated first',
  },
];

export const ImageSize = {
  LARGE: {
    width: 260,
    height: 200,
  },
  SMALL: {
    width: 150,
    height: 110,
  },
};

export const Housing = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const CITIES = [
  {
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
    'name': 'Paris',
  },
  {
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13,
    },
    'name': 'Cologne',
  },
  {
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13,
    },
    'name': 'Brussels',
  },
  {
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13,
    },
    'name': 'Amsterdam',
  },
  {
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13,
    },
    'name': 'Hamburg',
  },
  {
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13,
    },
    'name': 'Dusseldorf',
  },
];

export const mapTypes = {
  MAIN: 'MAIN',
  PROPERTY: 'PROPERTY',
};

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const APIRoutes = {
  OFFERS: '/hotels',
  OFFER: '/hotels/:id',
  OFFERS_NEARBY: '/hotels/:hotel_id/nearby',
  FAVORITES: '/favorite',
  REVIEWS: '/comments/:hotel_id',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};