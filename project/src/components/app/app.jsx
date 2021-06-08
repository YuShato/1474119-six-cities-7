import React from 'react';
import Main from '../pages/main/main';
import {number, shape, string, arrayOf, bool} from 'prop-types';
import Favorites from '../pages/favorites/favorites';
import PageNotFound from '../pages/page-not-found/page-not-found';
import SignIn from '../pages/sign-in/sign-in';
import Room from '../room/room';
import AppRoute from '../consts/consts';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App(props) {
  const {mockCardsData, cities} = props;

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
          <Room/>
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
  mockCardsData: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      imgPreview: string.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
    }),
  ),
  cities: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
  ),


};
export default App;
