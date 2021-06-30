import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../../loyout/places-list';
import PlacesSort from '../../loyout/places-sort';
import Header from '../../loyout/header/header';
import LocationsTabs from '../../loyout/locations-tabs';
import Map from '../../loyout/map';
import { ActionCreator } from '../../../store/action';
import { connect } from 'react-redux';

function MainPage ({onCitySelect, city, offers})  {

  useEffect(() =>{
    onCitySelect(city);
  }, [onCitySelect, city]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs city={city} activeCity={city} getActiveCity={onCitySelect} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <PlacesSort />
              <PlacesList offers={offers}  pageType='main'/>
            </section>
            <div className="cities__right-section">
              {offers ?
                <Map offers={offers} /> :
                <section className="cities__map map"></section>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.filteredOffers());
  },
});

export  {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
