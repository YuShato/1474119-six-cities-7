import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { MAX_PROPERTY_IMAGES, MAX_NUMBER_PIN, PlaceName, ButtonTypes } from '../../../common/const';
import { getNumberStars } from '../../../common/utils';
import ReviewWrapper from '../../review-wrapper/review-wrapper';
import Map from '../../map/map';
import PlaceList from '../../place-list/place-list';
import Header from '../../layouts/header/header';
import { fetchProperty } from '../../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../layouts/loading-screen/loading-screen';
import ButtonIsFavorite from '../../layouts/button-is-favorite/button-is-favorite';
import { nanoid } from 'nanoid';
import { getActivePlace } from '../../../store/action';


function OfferPage() {
  const {currentProperty, nearPlaces} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();
  const match = useRouteMatch();
  const pathId = match.params.id;

  useEffect(() => {
    if (String(currentProperty.id) !== pathId) {
      dispatch(fetchProperty(pathId));
    }
  }, [currentProperty.id, dispatch, pathId]);

  if (String(currentProperty.id) !== pathId) {
    return (
      <LoadingScreen />
    );
  }

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
    isFavorite,
    city,
    id,
  } = currentProperty;

  const renderIsPremium = () => (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  const setOfferActivePlace = () => {
    if (dispatch(getActivePlace(id)) !== undefined) {
      dispatch(getActivePlace(id));
    }
  };

  setOfferActivePlace();

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div id="error-wrapper"></div>
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, MAX_PROPERTY_IMAGES).map((image) => (
                <div className="property__image-wrapper" key={nanoid()}>
                  <img className="property__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? renderIsPremium() : null}
              <div className="property__name-wrapper">
                <h1 className="property__name" data-testid="property-name">
                  {title}
                </h1>
                <ButtonIsFavorite nameButton={ButtonTypes.PROPERTY.name} isFavorite={isFavorite} id={id}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: getNumberStars(rating),
                  }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features" data-testid="property-features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={nanoid()} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host" data-testid="property-host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewWrapper placeId={id}/>
            </div>
          </div>
          <section className="property__map map">
            {
              nearPlaces.length && <Map activePlaceId={id} city={city} places={nearPlaces.slice(0, MAX_NUMBER_PIN).concat(currentProperty)} />
            }
          </section>
        </section>
        {
          nearPlaces.length &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlaceList places={nearPlaces.slice(0, MAX_NUMBER_PIN)} placeName={PlaceName.NEAR.type} />
              </div>
            </section>
          </div>
        }
      </main>
    </div>
  );
}


export default OfferPage;
