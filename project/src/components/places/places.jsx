import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlaceCard from './card';

function PlacesList ({pageType, offers, onHoverOffer, activeOfferId}) {

  const changeOffer = (evt, id) => {
    evt.preventDefault();
    if (id !== activeOfferId) {
      onHoverOffer(id);
    }
  };

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={classNames('places__list tabs__content', {
      'favorites__places': pageType === 'favorites',
      'cities__places-list': pageType === 'main',
      'tabs__content': pageType === 'main',
      'near-places__list': pageType === 'offer',
    })}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          pageType={pageType}
          offer={offer}
          handleMouseEnter={(evt) => {
            setActiveCard({...activeCard, ...offer});
            changeOffer(evt, offer.id);
          }}
          handleMouseOut={() => {
            setActiveCard(null);
          }}
        />
      ))}
    </div>
  );
}

PlacesList.propTypes = {
  pageType: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.object),
  onHoverOffer: PropTypes.func.isRequired,
  activeOfferId: PropTypes.number,
};

export default PlacesList;
