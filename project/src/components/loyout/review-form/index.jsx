import React, { useState } from 'react';
import Star from '../star';
import { nanoid } from 'nanoid';
import { ID_MAX_LENGTH, MAX_RATING } from '../../consts/consts';

function ReviewsForm () {
  const [userForm, setUserForm] = useState({
    stars: null,
    review: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRadioChange = (evt) => {
    const stars = evt.target.value;
    setUserForm((state) => ({...state, stars}));
  };

  const handleTextareaChange = (evt) => {
    evt.preventDefault();
    const {value} = evt.target;
    setUserForm({...userForm, review: value});
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Array.from(new Array(MAX_RATING)).map((field, index) => (
          <Star
            key={nanoid(ID_MAX_LENGTH)}
            serialNumber={MAX_RATING - index}
            handleRadioChange={handleRadioChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userForm.review}
        onChange={handleTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
