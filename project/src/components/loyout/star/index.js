import React from 'react';
import PropTypes from 'prop-types';

function Star ({rate, handleRadioChange}) {
  const {id, title} = rate;
  return (
    <React.Fragment>
      <input
        className='form__rating-input visually-hidden'
        name='rating'
        defaultValue={id}
        id={`${id}-stars`}
        type='radio'
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${id}-stars`}
        className='reviews__rating-label form__rating-label'
        title={title}
      >
        <svg className='form__star-image' width='37' height='33'>
          <use xlinkHref='#icon-star'></use>
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
