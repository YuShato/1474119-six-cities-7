import React from 'react';
import PropTypes from 'prop-types';
import { sendPropertyReview } from '../../store/api-actions';
import { ReviewFormParams, RatingData } from '../../common/const';
import { useDispatch } from 'react-redux';
import Star from './star';


function ReviewForm({placeId}) {
  const dispatch = useDispatch();

  const [commentForm, setCommentForm] = React.useState({
    rating: null,
    comment: '',
  });


  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(sendPropertyReview(placeId, commentForm));

    setCommentForm({
      ...commentForm,
      rating: null,
      comment: '',
    });
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} data-testid="reviews-form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating"
        data-testid="form-rating"
        onChange={handleFieldChange}
      >
        {RatingData.map((rate) => (
          <Star
            key={rate.title}
            rate={rate}
            checked={String(rate.value) === commentForm.rating}
          />),
        )}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentForm.comment}
        onChange={handleFieldChange}
        data-testid="reviews-textarea"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={
          !((commentForm.comment.length > ReviewFormParams.MIN_SIMBOL_REVIEW) && commentForm.rating)
        }
        >Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  placeId: PropTypes.number.isRequired,
};

export default ReviewForm;
