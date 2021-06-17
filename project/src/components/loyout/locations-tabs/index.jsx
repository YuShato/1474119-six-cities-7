import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '../location-item';
import { nanoid } from '@reduxjs/toolkit';
import { ID_MAX_LENGTH } from '../../consts/consts';

function LocationsTabs ({cities}) {

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((city) => (
        <LocationItem key={nanoid(ID_MAX_LENGTH)} city={city}/>
      ))}
    </ul>
  );
}

LocationsTabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
};

export default LocationsTabs;
