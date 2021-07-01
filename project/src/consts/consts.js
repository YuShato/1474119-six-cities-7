export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/id',
  PAGE_NOT_FOUND: '/404',
};

export const MAX_RATING = 5;

export const ID_MAX_LENGTH = 10;

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

export const MapParams = {
  ZOOM: 12,
  MAP_HEIGHT: '579px',
  CENTER: {
    lat: 52.38333,
    lng: 4.9,
  },
  ICON: {
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  },
};

export const Setting = {
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  PAGE_TYPES: {
    FAVORITES: 'favorites',
    MAIN: 'main',
    OFFER: 'offer',
  },
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  RATING_HIGH: 'Top rated first',
};

export const INITIAL_CITY = Setting.CITIES[0];
