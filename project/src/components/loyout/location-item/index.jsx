import React from 'react';
import PropTypes from 'prop-types';

function LocationItem ({city, onClick, activeCity}) {

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link
        ${city === activeCity ? 'tabs__item--active' : ''} tabs__item`}
        href="/some/valid/uri"
        onClick={(evt) => {
          evt.preventDefault();
          onClick(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  city: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string,
};
export default LocationItem;
