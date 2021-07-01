import React from 'react';
import PlacesList from '../loyout/places-list';
import PlacesSort from '../loyout/places-sort';
import Map from '../loyout/map';
import PropTypes from 'prop-types';


function PlacesContainer ({offers, city}) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city}</b>
          <PlacesSort />
          <PlacesList offers={offers}  pageType='main'/>
        </section>
        <div className="cities__right-section">
          {offers ?
            <Map offers={offers} /> :
            <section className="cities__map map"></section>}
        </div>
      </div>
    </div>
  );
}

PlacesContainer.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlacesContainer;

