import React from 'react';
import Header from '../../loyout/header/header';
import { nanoid } from 'nanoid';
import Reviews from '../../loyout/reviews';
import PropertyGallery from '../../loyout/property-gallery';
import PropTypes from 'prop-types';
import { getRating } from '../../../common';
import PlacesList from '../../loyout/places-list';
import { ID_MAX_LENGTH } from '../../../consts/consts';
import { Housing } from '../../../consts/consts';
import Map from '../../loyout/map';

function OfferPage ({offers, reviewGet, ratingData}) {
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
    host: {name, avatar_url: avatarUrl},
    description,
  } = offers[0];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={images} />
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
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRating(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {Housing[type]}
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
                    <li className="property__inside-item" key={nanoid(ID_MAX_LENGTH)}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
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
                  <p className="property__text" key={nanoid(ID_MAX_LENGTH)}>
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviewGet={reviewGet} ratingData={ratingData}/>
            </div>
          </div>
          {offers ? <Map offers={offers.slice(1, 4)}/> : <section className="property__map map" />}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlacesList pageType='offer' offers={offers.slice(0, 3)} />
          </section>
        </div>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviewGet: PropTypes.arrayOf(PropTypes.object),
  ratingData: PropTypes.arrayOf(PropTypes.object),
};

export default OfferPage;
