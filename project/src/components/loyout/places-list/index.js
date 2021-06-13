import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card';

function PlacesList({offers}) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default PlacesList;
