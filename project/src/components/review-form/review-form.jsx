import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { sendPropertyReview } from '../../store/api-actions';
import RatingList from '../rating-list/rating-list';
import ReviewFeedback from '../review-feedback/review-feedback';
import { ReviewData } from '../../common/const';


function ReviewForm ({roomId}) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [, setReadonly] = useState(false);

  const isButtonDisabled = rating === null || comment.length < ReviewData.MIN_SIMBOL_REVIEW
    || comment.length > ReviewData.MAX_SIMBOL_REVIEW;

  const onFail = () => {
    setReadonly(false);
  };

  const onSuccess = () => {
    setRating(null);
    setComment('');
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendPropertyReview(roomId, {comment: comment, rating: rating}))
      .then(() => onSuccess())
      .catch(() => {
        onFail();
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => handleFormSubmit(evt)}
      data-testid="reviews-form"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingList
          rating={rating}
          setRating={setRating}
        />
      </div>
      <ReviewFeedback
        comment={comment}
        setComment={setComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set
          <span className="reviews__star">rating</span>
        and describe your stay with at least
          <b className="reviews__text-amount">{ReviewData.MIN_SIMBOL_REVIEW} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isButtonDisabled ? 'disabled' : ''}
        >
           Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  roomId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
};

export default memo(ReviewForm);
