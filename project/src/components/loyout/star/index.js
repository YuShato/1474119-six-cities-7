import React from 'react';
import PropTypes from 'prop-types';

function Star ({currentRating, handleRadioChange})  {
  const {id, title} = currentRating;

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={currentRating.id}
        id={`${id}-stars`}
        type="radio"
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${id}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
}

Star.propTypes = {
  currentRating: PropTypes.object.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default Star;
