import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { ActionCreator } from '../../../store/action';
import { fetchFavoriteOffers } from '../../../store/api-actions';
import Header from '../../../components/layout/header/header';
import Footer from '../../../components/layout/footer/footer';
import PlacesList from '../../../components/places/places';
import LoadingScreen from '../../loading-screen/loading-screen';


function FavoritesPage({favoriteOffers, changeCity, loadFavoriteOffers}) {
  useEffect(() => {
    if (!favoriteOffers.data) {
      loadFavoriteOffers();
    }
  }, [favoriteOffers, loadFavoriteOffers]);

  useEffect(() => {
    loadFavoriteOffers();
  }, [loadFavoriteOffers]);

  if (favoriteOffers.loading) {
    return <LoadingScreen />;
  }

  const cityList = [
    ...new Set(favoriteOffers.data.map((offer) => offer.city.name)),
  ];

  const cardClickHandler = (city) => {
    changeCity(city);
  };

  if (!favoriteOffers.data) {
    return null;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityList.map((city) => (
                <li
                  key={nanoid()}
                  className="favorites__locations-items"
                  onClick={() => cardClickHandler(city)}
                >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link to={AppRoute.MAIN} className="locations__item-link">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <PlacesList
                    pageType="favorites"
                    offers={favoriteOffers.data.filter(
                      (offer) => offer.city.name === city,
                    )}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.object,
  changeCity: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.incrementCity(city));
  },
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
