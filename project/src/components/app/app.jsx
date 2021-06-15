import React from 'react';
import PropTypes from 'prop-types';
import Main from '../pages/main/main';
import Favorites from '../pages/favorites/favorites';
import PageNotFound from '../pages/page-not-found/page-not-found';
import SignIn from '../pages/sign-in/sign-in';
import Room from '../pages/room/room';
import { AppRoute } from '../consts/consts';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App(props) {
  const {mockCardsData, cities, offers, reviewGet, starRating} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main mockCardsData={mockCardsData} cities={cities}/>
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room offers={offers} reviewGet={reviewGet} starRating={starRating}/>
        </Route>
        <Route exact path={AppRoute.PAGE_NOT_FOUND}>
          <PageNotFound/>
        </Route>
        <Redirect from={'*'} to={AppRoute.PAGE_NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {

  cities: PropTypes.arrayOf(PropTypes.object),
  offers: PropTypes.arrayOf(PropTypes.object),
  mockCardsData: PropTypes.arrayOf(PropTypes.object),
  reviewGet: PropTypes.arrayOf(PropTypes.object),
  starRating: PropTypes.arrayOf(PropTypes.object),
};
export default App;
