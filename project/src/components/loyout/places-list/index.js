import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card';
import { usePage } from '../../../hooks/usePage';

function PlacesList({offers}) {
  const [activeCard, setActiveCard] = useState(null);

  const Page = usePage();

  return (
    <div className={`
      ${Page.isFavorites && 'favorites__places'}
      ${Page.isMain && 'cities__places-list tabs__content'}
      ${Page.isOffer && 'near-places__list'} places__list
    `}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
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
};

export default PlacesList;
