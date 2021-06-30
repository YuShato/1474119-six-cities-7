import React from 'react';
import PropTypes from 'prop-types';
import {Setting} from '../../../consts/consts';
import LocationItem from '../location-item';
import { nanoid } from '@reduxjs/toolkit';
import { ID_MAX_LENGTH } from '../../../consts/consts';

function LocationsTabs ({getActiveCity, activeCity}) {

  const handleCityClick = (city) => {
    getActiveCity(city);
  };

  return (
    <ul className='locations__list tabs__list'>
      {Setting.CITIES.map((city) => (
        <LocationItem key={nanoid(ID_MAX_LENGTH)}
          city={city}
          onClick={handleCityClick}
          activeCity={activeCity}
        />
      ))}
    </ul>
  );
}

LocationsTabs.propTypes = {
  getActiveCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default LocationsTabs;
