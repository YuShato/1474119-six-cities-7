import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import { reducer, initialState } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {createAPI, AuthorizationStatus} from './store/api';
import {ActionCreator} from './store/action';
import thunk from 'redux-thunk';
import  {checkAuth} from './store/api-actions';

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH),
  ),
);

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
