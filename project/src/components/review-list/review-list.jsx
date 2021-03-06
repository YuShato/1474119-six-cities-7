import React from 'react';
import Review from '../review/review';
import { reviewsPropTypes } from '../../common/prop-types';
import { nanoid } from '@reduxjs/toolkit';

function ReviewList({reviews}) {

  return (
    <ul className="reviews__list" data-testid="reviews-list">
      {reviews.map((review) => (
        <Review
          key={nanoid()}
          review={review}
        />
      ))}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: reviewsPropTypes,
};

export default React.memo(ReviewList);
