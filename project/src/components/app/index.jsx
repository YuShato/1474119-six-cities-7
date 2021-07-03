import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main';
import FavoritesPage from '../pages/favorites';
import LoginPage from '../pages/sign-in';
import OfferPage from '../pages/room';
import NotFoundPage  from '../pages/page-not-found';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App ({offers, reviewGet, ratingData}) {

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
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferPage
            offers={offers}
            reviewGet={reviewGet}
            ratingData={ratingData}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviewGet: PropTypes.arrayOf(PropTypes.object),
  ratingData: PropTypes.arrayOf(PropTypes.object),
};

export default App;
