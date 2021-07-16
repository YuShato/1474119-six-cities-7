import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

import { HousingType, AuthorizationStatus } from '../../../const';
import { getRating } from '../../../common';
import Header from '../../layout/header/header';
import ReviewsList from '../../../components/reviews/review';
import ReviewsForm from '../../../components/reviews/form';
import OfferPropertyGallery from '../../../components/offer/offer-gallery';
import PlacesList from '../../../components/places/places';
import LoadingScreen from '../../loading-screen/loading-screen';
import { fetchOffer, fetchNearOffers, fetchReviews, submitComment } from '../../../store/api-actions';


function OfferPage({
  reviews,
  openedOffer,
  submitCommentOnServer,
  status,
  loadOffer,
  nearOffers,
  loadNearOffersSuccess,
  loadReviews,
}) {
  const match = useRouteMatch();
  const pathId = parseInt(match.params.id.slice(1), 10);

  useEffect(() => {
    if (openedOffer.id !== pathId) {
      loadNearOffersSuccess(pathId);
      loadReviews(pathId);
      loadOffer(pathId);
    }
  }, [loadNearOffersSuccess, loadOffer, loadReviews, openedOffer.id, pathId]);


  const {
    is_premium: isPremium,
    images,
    title,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host: {name, avatar_url: avatarUrl, is_pro: isPro},
    description,
    // city,
    is_favorite: isFavorite,
  } = openedOffer;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <OfferPropertyGallery images={images} />
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={classNames('property__bookmark-button button', {
                    'property__bookmark-button--active': isFavorite,
                  })}
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width:`${getRating(rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {HousingType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((service) => (
                    <li className="property__inside-item" key={nanoid()}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={classNames(
                      'property__avatar-wrapper',
                      'user__avatar-wrapper',
                      {
                        'property__avatar-wrapper--pro': isPro,
                      },
                    )}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                </div>
                <div className="property__description">
                  {description.map((text) => (
                    <p className="property__text" key={nanoid()}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">{reviews.data.length}</span>
                </h2>
                {reviews.data ? (
                  <ReviewsList reviews={reviews.data} />
                ) : (
                  <LoadingScreen />
                )}

                {status === AuthorizationStatus.AUTH && (
                  <ReviewsForm
                    openedOffer={openedOffer}
                    submitCommentOnServer={submitCommentOnServer}
                  />
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {/* {nearOffers.data ? (
              <Map offers={nearOffers.data} city={city} />
            ) : (
              <LoadingScreen />
            )} */}
          </section>
        </section>
        {nearOffers.data ? (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <PlacesList pageType="offer" offers={nearOffers.data} />
            </section>
          </div>
        ) : (
          <LoadingScreen />
        )}
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  status: PropTypes.string.isRequired,
  reviews: PropTypes.object,
  openedOffer: PropTypes.shape({
    'bedrooms': PropTypes.number,
    'city': PropTypes.shape({
      'location': PropTypes.objectOf(PropTypes.number),
      'name': PropTypes.string,
    }),
    'description': PropTypes.string,
    'goods': PropTypes.arrayOf(PropTypes.string),
    'host': PropTypes.shape({
      'avatar_url': PropTypes.string,
      'id': PropTypes.number.isRequired,
      'is_pro': PropTypes.bool,
      'name': PropTypes.string,
    }),
    'id': PropTypes.number.isRequired,
    'images': PropTypes.arrayOf(PropTypes.string),
    'is_favorite': PropTypes.bool,
    'is_premium': PropTypes.bool,
    'location': PropTypes.objectOf(PropTypes.number),
    'max_adults': PropTypes.number,
    'preview_image': PropTypes.string,
    'price': PropTypes.number,
    'rating': PropTypes.number,
    'title': PropTypes.string,
    'type': PropTypes.string,
  }),
  submitCommentOnServer: PropTypes.func.isRequired,
  nearOffers: PropTypes.object.isRequired,
  loadOffer: PropTypes.func.isRequired,
  loadNearOffersSuccess: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.user.status,
  openedOffer: state.openedOffer,
  nearOffers: state.nearOffers,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  submitCommentOnServer(id, review) {
    dispatch(submitComment(id, review));
  },
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
  loadNearOffersSuccess(id) {
    dispatch(fetchNearOffers(id));
  },
  loadReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
