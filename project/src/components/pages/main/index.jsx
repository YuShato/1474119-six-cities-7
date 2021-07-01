import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../../loyout/header/header';
import LocationsTabs from '../../loyout/locations-tabs';
import { ActionCreator } from '../../../store/action';
import { connect } from 'react-redux';
import PlacesContainer from '../../places-container';
import MainEmpty from '../../loyout/main-empty';

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
        {offers.length ? <PlacesContainer offers={offers} city={city}/> : <MainEmpty city={city} />}
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
