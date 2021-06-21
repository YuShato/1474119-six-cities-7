import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../loyout/footer';
import Header from '../../loyout/header/header';
import PlacesList from '../../loyout/places-list';
import { getOffersByCity } from '../../../common';

function FavoritesPage ({offers, pageType}) {
  return (
    <div className="page">
      <Header />
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
                <PlacesList offers={getOffersByCity(offers, 'Amsterdam')} pageType={pageType}/>
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
                <PlacesList offers={getOffersByCity(offers, 'Cologne')} pageType={pageType} />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.string.isRequired,
};

export default FavoritesPage;
