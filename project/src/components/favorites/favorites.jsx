import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesCity from './favorites-city/favorites-city';
import Header from '../layouts/header/header';
import Footer from '../layouts/footer/footer';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {fetchFavoritePlaceList} from '../../store/api-actions';
import LoadingScreen from '../layouts/loading-screen/loading-screen';
import { nanoid } from '@reduxjs/toolkit';
import { PlaceSettings } from '../../common/const';

function Favorites() {
  const dispatch = useDispatch();
  const {isDataFavoriteLoaded, favoritesPlaces} = useSelector((state) => state.DATA);

  useEffect(() => {
    if (!isDataFavoriteLoaded) {
      dispatch(fetchFavoritePlaceList());
    }
  }, [dispatch, isDataFavoriteLoaded]);

  if (!isDataFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const favoriteCities = Array.from(new Set(favoritesPlaces.map((place) => place.city.name)));

  return (
    <div className={`page ${favoritesPlaces.length > 0 ? '' : 'page page--favorites-empty'}`}>
      <Header />
      {favoritesPlaces.length > 0 ?
        <main className="page__main page__main--favorites" data-testid="favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list" data-testid="favorites-list">
                {favoriteCities.map((city) => {
                  const favoriteCityPlaces = favoritesPlaces.filter((place) => place.city.name === city);
                  return (
                    <FavoritesCity
                      key={nanoid()}
                      places={favoriteCityPlaces}
                      city={city}
                      placeName={PlaceSettings.FAVORITES.type}
                    />
                  );
                })}
              </ul>
            </section>
          </div>
        </main>
        : <FavoritesEmpty />}
      <Footer />
    </div>
  );
}

export default Favorites;
