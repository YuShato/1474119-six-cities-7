import React from 'react';
import PropTypes from 'prop-types';

function Star({rate, handleRadioChange}) {

  const handleInputChange = (evt) => {
    evt.target.checked ? evt.target.removeAttribute('checked') : evt.target.setAttribute('checked', true);
  };

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={rate.value}
        id={`${rate.value}-stars`}
        type="radio"
        onChange={handleRadioChange}
        onClick={handleInputChange}
      />
      <label
        htmlFor={`${rate.value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={rate.title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
}

Star.propTypes = {
  rate: PropTypes.object.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default Star;
