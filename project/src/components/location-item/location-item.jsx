import React from 'react';

function LocationItem (city) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default LocationItem;
