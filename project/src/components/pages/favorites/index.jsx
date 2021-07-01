import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../loyout/footer';
import Header from '../../loyout/header/header';
import FavoritesEmpty from '../../loyout/favorites-empty';
import FavoritesContainer from '../../loyout/favorites-container';

function FavoritesPage ({offers}) {
  return (
    <div className="page">
      <Header />

      {offers.length ? <FavoritesContainer offers={offers}/> : <FavoritesEmpty/>}

      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoritesPage;
