import React from 'react';
import PropTypes from 'prop-types';

function Star({serialNumber, handleRadioChange}) {
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={serialNumber}
        id={`${serialNumber}-stars`}
        type="radio"
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${serialNumber}-stars`}
        className="reviews__rating-label form__rating-label"
        title="good"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
}

Star.propTypes = {
  serialNumber: PropTypes.number.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default Star;
