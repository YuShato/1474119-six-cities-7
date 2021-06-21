import React from 'react';
import ReactDOM from 'react-dom';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import App from './components/app';
import Rating from './components/consts/rating';

const Setting = {
  AD_COUNT: 312,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};

ReactDOM.render(
  <App
    adCount={Setting.AD_COUNT}
    cities={Setting.CITIES}
    offers={offers.slice()}
    reviewGet={reviews.slice()}
    ratingData={Rating}
  />,
  document.querySelector('#root'),
);
