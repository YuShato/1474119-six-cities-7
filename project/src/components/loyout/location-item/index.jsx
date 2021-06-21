import React from 'react';
import PropTypes from 'prop-types';

function LocationItem ({city}) {
  return (
    <li className="locations__item">
      <a className={city === 'Amsterdam' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link     tabs__item'} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  city: PropTypes.string,
};
export default LocationItem;
