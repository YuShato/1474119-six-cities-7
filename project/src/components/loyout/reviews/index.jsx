import React from 'react';
import ReviewForm from '../review-form';
import {getReviewDate, getRating} from '../../../common';
import PropTypes from 'prop-types';

function Reviews ({reviewGet}) {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {reviewGet.map((review) => {
          const {
            user: {avatar_url: avatarUrl, name},
            rating,
            comment,
            date,
            id,
          } = review;

          return (
            <li className="reviews__item" key={id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  {name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${getRating(rating)}%`}}></span>
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
        })}
      </ul>
      <ReviewForm />
    </section>
  );
}
Reviews.propTypes = {
  reviewGet: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
