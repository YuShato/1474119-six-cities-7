import React from 'react';
import Main from '../main/main';
import {number, shape, string, arrayOf, bool} from 'prop-types';
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import AppRoute from '../consts/consts';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App(props) {
  const {mockCardsData} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main mockCardsData={mockCardsData}/>
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
};
export default App;
