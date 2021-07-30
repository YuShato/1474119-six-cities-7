import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import LoadingScreen from '../layouts/loading-screen/loading-screen';
import { fetchPropertyReviews } from '../../store/api-actions';
import { AuthorizationStatus, MAX_REVIEW_AMOUNT } from '../../common/const';
import { resetIsReviewsLoaded } from '../../store/action';
import PropTypes from 'prop-types';


function ReviewWrapper({placeId}) {

  const {authorizationStatus} = useSelector((state) => state.USER);
  const {isReviewsLoaded, propertyReviews} = useSelector((state) => state.DATA);
  const currentReviews = propertyReviews.slice(MAX_REVIEW_AMOUNT);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isReviewsLoaded) {
      dispatch(fetchPropertyReviews(placeId));
    }
    return () => dispatch(resetIsReviewsLoaded());
  }, []);

  if (!isReviewsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <section className="property__reviews reviews" data-testid="property-reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {currentReviews.length}
        </span>
        <div id="error-wrapper"></div>
      </h2>
      {
        (propertyReviews.length > 0)
        && <ReviewList reviews={currentReviews} />
      }
      {
        authorizationStatus === AuthorizationStatus.AUTH && <ReviewForm placeId={placeId} />
      }
    </section>
  );
}

ReviewWrapper.propTypes = {
  placeId: PropTypes.number.isRequired,
};

export default ReviewWrapper;
