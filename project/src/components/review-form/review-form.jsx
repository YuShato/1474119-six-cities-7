import React from 'react';
import PropTypes from 'prop-types';
import { sendPropertyReview } from '../../store/api-actions';
import { UserFormReview, RatingData } from '../../common/const';
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
    evt.target.reset();

  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
    checkReviewInput();
  };

  const checkReviewInput = () => {
    const valueLength = commentForm.comment.length;
    let currentMessage = '';
    let currentColor = '';

    if (valueLength < UserFormReview.MIN_SIMBOL_REVIEW) {
      currentMessage = `Enter ${UserFormReview.MIN_SIMBOL_REVIEW - valueLength} more characters`;
      currentColor = 'red';
    } else if (valueLength > UserFormReview.MAX_SIMBOL_REVIEW) {
      currentMessage = `Remove extra ${  valueLength - UserFormReview.MAX_SIMBOL_REVIEW  } characters.`;
      currentColor = 'red';
    } else {
      currentMessage = 'Excellent review!';
      currentColor = 'green';
    }

    return {
      currentMessage: currentMessage,
      color: currentColor,
    };
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
      <output id="comment" style={{fontSize:'12px', color: `${checkReviewInput().color}`}}>{checkReviewInput().currentMessage}</output>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={
          !((commentForm.comment.length > UserFormReview.MIN_SIMBOL_REVIEW) && (commentForm.comment.length < UserFormReview.MAX_SIMBOL_REVIEW) && commentForm.rating)
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
