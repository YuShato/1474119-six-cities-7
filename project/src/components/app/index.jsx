import React from 'react';
import MainPage from '../pages/main';
import FavoritesPage from '../pages/favorites';
import LoginPage from '../pages/sign-in';
import OfferPage from '../pages/room';
import NotFoundPage  from '../pages/page-not-found';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App () {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferPage/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
