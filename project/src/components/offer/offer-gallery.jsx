import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

function PropertyGallery({images}) {
  return (
    <div className="property__gallery">
      {images.map((image, index) => (
        <div className="property__image-wrapper" key={nanoid()}>
          <img
            className="property__image"
            src={image}
            alt="Photo studio"
          />
        </div>
      ))}
    </div>
  );
}

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default PropertyGallery;
