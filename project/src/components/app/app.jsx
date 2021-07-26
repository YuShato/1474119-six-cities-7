import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import LoginPage from '../pages/login-page/login-page';
import Favorites from '../favorites/favorites';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../common/const';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}
        render={() => <MainPage />}
      />
      <Route exact path={AppRoute.LOGIN}
        render={() => <LoginPage />}
      />
      <PrivateRoute exact
        path={AppRoute.FAVORITES}
        render={() => <Favorites />}
      />
      <Route exact
        path={AppRoute.OFFER}
        render={() => <OfferPage />}
      />
      <Route exact path={AppRoute.ERROR}
        render={() => <NotFoundPage />}
      />
      <Route
        render={() => <NotFoundPage />}
      />
    </Switch>
  );
}

export default App;
