import React from 'react';
import PropTypes from 'prop-types';

function Star({rate}) {

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={rate.value}
        id={`${rate.value}-stars`}
        type="radio"
        data-testid="stars-rating"
      />
      <label
        htmlFor={`${rate.value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={rate.title}
        data-testId="stars-rating-label"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
}

Star.propTypes = {
  rate: PropTypes.shape({
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Star;
