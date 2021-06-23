import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card';
import { usePage } from '../../../hooks/usePage';

function PlacesList({offers}) {
  const [activeCard, setActiveCard] = useState(null);

  const Page = usePage();
  const className = `${
    (Page.isFavorites && 'favorites__image-wrapper') ||
    (Page.isMain && 'cities__places-list tabs__content') ||
    (Page.isOffer && 'near-places__list')
  } pplaces__list`;


  return (

    <div className={className}>
      {(Page.isOffer ? offers.slice(0, 3) : offers).map((offer) => (
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
