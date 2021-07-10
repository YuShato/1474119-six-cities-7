import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';
import browserHistory from '../../browser-history';

import MainPage from '../../components/pages/main-page/main-page';
import FavoritesPage from '../../components/pages/favorites-page/favorites-page';
import LoginPage from '../../components/pages/login-page/login-page';
import OfferPage from '../../components/pages/offer-page/offer-page';
import NotFoundPage from '../../components/pages/not-found-page/not-found-page';
import PrivateRoute from '../../components/private-route/private-route';

function App () {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage />
        </Route>
        <PrivateRoute path={AppRoute.FAVORITES} exact>
          <FavoritesPage />
        </PrivateRoute>
        <Route path={AppRoute.ROOM} exact>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
