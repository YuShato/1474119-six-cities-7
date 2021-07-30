import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppRoute } from '../../common/const';
import App from './app';
import '@testing-library/jest-dom/extend-expect';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTH',
        authorizationInfo: {},
      },
      PLACES: {
        activeCity: 'Paris',
        activeSorting: 'Popular',
        activePlaceId: null,
      },
      DATA: {
        places: [
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 1,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': false,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 2,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': false,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 3,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': false,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
        ],
        isDataLoaded: true,
        favoritesPlaces: [
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 1,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': true,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 2,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': true,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
        ],
        isDataFavoriteLoaded: true,
        isReviewsLoaded: false,
        propertyReviews: [
          {
            'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'date': '2019-05-08T14:13:56.569Z',
            'id': 1,
            'rating': 4,
            'user': {
              'avatarUrl': 'img/1.png',
              'id': 4,
              'isPro': false,
              'name': 'Max',
            },
          },
          {
            'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'date': '2019-05-08T14:13:56.569Z',
            'id': 2,
            'rating': 4,
            'user': {
              'avatarUrl': 'img/1.png',
              'id': 4,
              'isPro': false,
              'name': 'Max',
            },
          },
        ],
        currentProperty: {
          'bedrooms': 3,
          'city': {
            'location': {
              'latitude': 52.370216,
              'longitude': 4.895168,
              'zoom': 10,
            },
            'name': 'Paris',
          },
          'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
          'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
          'host': {
            'avatarUrl': 'img/1.png',
            'id': 3,
            'isPro': true,
            'name': 'Angelina',
          },
          'id': 1,
          'images': ['img/1.png', 'img/2.png'],
          'isFavorite': false,
          'isPremium': false,
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8,
          },
          'maxAdults': 4,
          'previewImage': 'img/1.png',
          'price': 120,
          'rating': 4.8,
          'title': 'Beautiful & luxurious studio at great location',
          'type': 'apartment',
        },
        nearPlaces: [
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 1,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': false,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 2,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': false,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Paris',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatarUrl': 'img/1.png',
              'id': 3,
              'isPro': true,
              'name': 'Angelina',
            },
            'id': 3,
            'images': ['img/1.png', 'img/2.png'],
            'isFavorite': false,
            'isPremium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'maxAdults': 4,
            'previewImage': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
        ],
        isInfoLoaded: false,
        isNearbyLoaded: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('cities')).toBeInTheDocument();
    expect(screen.getByText('Places')).toBeInTheDocument();

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();

    expect(screen.getByTestId('favorites')).toBeInTheDocument();
    expect(screen.getByText('Saved listing')).toBeInTheDocument();

    expect(screen.getByTestId('favorites-list')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
