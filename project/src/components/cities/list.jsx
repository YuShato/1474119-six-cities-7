import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { mapTypes } from '../../const';
import Map from '../../components/map/map';
import PlaceSort from '../../components/places/sort';
import PlacesList from '../../components/places/places';
import  { getSorting } from '../../common';


function CitiesList({
  selectedCity,
  offers,
  sortOption,
  onHoverOffer,
  activeOfferId,
  onSetSortOption,
}) {
  const filteredOffers = useMemo(
    () => offers.filter((item) => item.city.name === selectedCity.name),
    [offers, selectedCity],
  );

  const sortedOffers = useMemo(
    () => getSorting(filteredOffers, sortOption),
    [filteredOffers, sortOption],
  );

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${filteredOffers.length} places to stay in ${selectedCity.name}`}</b>
          <PlaceSort
            onSetSortOption={onSetSortOption}
            sortOption={sortOption}
          />
          <PlacesList
            pageType="main"
            offers={sortedOffers}
            onHoverOffer={onHoverOffer}
            activeOfferId={activeOfferId}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={filteredOffers}
            type={mapTypes.MAIN}
            location={selectedCity.location}
            activeOfferId={activeOfferId}
          />
        </div>
      </div>
    </div>
  );
}

CitiesList.propTypes = {
  selectedCity: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  sortOption: PropTypes.object,
  onHoverOffer: PropTypes.func.isRequired,
  activeOfferId: PropTypes.number,
  onSetSortOption: PropTypes.func.isRequired,
};

export default CitiesList;
