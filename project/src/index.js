import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockCardsData from './mocks/mock';
import CITIES from './components/consts/cities';
import offers from './mocks/offers';
import reviewGet from './mocks/reviewGet';

ReactDOM.render(
  <React.StrictMode>
    <App
      mockCardsData={mockCardsData}
      cities={CITIES}
      offers={offers}
      reviewGet={reviewGet.slice()}
    />,
  </React.StrictMode>,
  document.getElementById('root'));
