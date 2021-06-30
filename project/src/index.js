import React from 'react';
import ReactDOM from 'react-dom';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import App from './components/app';
import Rating from './consts/rating';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Setting } from './consts/consts';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        adCount={Setting.AD_COUNT}
        cities={Setting.CITIES}
        offers={offers.slice()}
        reviewGet={reviews.slice()}
        ratingData={Rating}
        pageTypes={Setting.PAGE_TYPES}
      />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
