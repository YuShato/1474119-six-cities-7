import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Rating from './consts/rating';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers.slice()}
        reviewGet={reviews.slice()}
        ratingData={Rating}
      />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
