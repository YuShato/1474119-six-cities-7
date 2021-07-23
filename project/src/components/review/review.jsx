import React from 'react';
import {reviewPropTypes} from '../../common/prop-types';
import {getNumberStars, getReviewDate} from '../../common/utils';

function Review({review}) {
  const {
    comment,
    rating,
    user: {avatarUrl, name},
    date,
  } = review;

  return (
    <li className="reviews__item" data-testid="reviews-item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info" data-testid="reviews-info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: getNumberStars(rating),
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getReviewDate(date).htmlDate}>{getReviewDate(date).userDate}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewPropTypes,
};

export default Review;
