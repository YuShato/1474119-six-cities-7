import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list';
import { getOffersByCity } from '../../../common';

function FavoritesContainer ({offers}) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              {/* Временное решение */}
              <PlacesList offers={getOffersByCity(offers, 'Amsterdam')} pageType='favorites'/>
            </li>
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              {/* Временное решение */}
              <PlacesList offers={getOffersByCity(offers, 'Cologne')} pageType='favorites' />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

FavoritesContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoritesContainer;
