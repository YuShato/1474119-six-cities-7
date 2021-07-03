import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card';
import classNames from 'classnames';

function PlacesList({offers, pageType}) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div
      className={classNames('places__list', {
        'favorites__places': pageType === 'favorites',
        'cities__places-list tabs__content': pageType === 'main',
        'near-places__list': pageType === 'offer',
      })}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          pageType={pageType}
          handleMouseEnter={() => {
            setActiveCard({...activeCard, ...offer});
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
  offers: PropTypes.arrayOf(PropTypes.object),
  pageType: PropTypes.string,
};

export default PlacesList;
