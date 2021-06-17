import React from 'react';
import PropTypes from 'prop-types';
import PropertyImage from '../property-image';
import { nanoid } from '@reduxjs/toolkit';
import { ID_MAX_LENGTH } from '../../consts/consts';


function PropertyGallery ({images}) {
  return (
    <div className='property__gallery'>
      {images.map((image) => <PropertyImage key={nanoid(ID_MAX_LENGTH)} image={image}/>)}
    </div>
  );
}

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default PropertyGallery;
