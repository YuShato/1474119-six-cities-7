import React from 'react';
import ReviewsForm from '../review-form';
import ReviewItem from '../review-item/review-item';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ID_MAX_LENGTH } from '../../../consts/consts';

function Reviews ({reviewGet, ratingData}) {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewGet.length}</span>
      </h2>
      <ul className="reviews__list">
        { reviewGet.map((review) => (
          <ReviewItem review={review} key={nanoid(ID_MAX_LENGTH)}/>
        ))}
      </ul>
      <ReviewsForm ratingData={ratingData} />
    </section>
  );
}

Reviews.propTypes = {
  reviewGet: PropTypes.arrayOf(PropTypes.object),
  ratingData: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
