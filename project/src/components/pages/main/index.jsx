import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../loyout/header/header';
import LocationsTabs from '../../loyout/locations-tabs';
import { ActionCreator } from '../../../store/action';
import PlacesContainer from '../../places-container';
import MainEmpty from '../../loyout/main-empty';
import LoadingScreen from '../../loyout/loading-screen';
import {setSorting} from '../../../common';
import { fetchOffersList } from '../../../store/api-actions';

function MainPage ({onCitySelect, city, offers, loadOffersData, ...props})  {

  useEffect(() => {
    if (!offers.error && !offers.loading && offers.data === null) {
      loadOffersData();
    }
  }, [offers]);

  if (offers.loading) {
    return (
      <LoadingScreen />
    );
  }

  if (offers.error) {
    return <div>error: {offers.error}</div>;
  }

  if (!offers.data) {
    return null;
  }

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
        {offers.data.length ? <PlacesContainer offers={offers.data} city={city} {...props}/> : <MainEmpty city={city} />}
      </main>
    </div>
  );
}

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadOffersData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: setSorting(state.offers, state.activeSort),
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.filteredOffers());
  },
  loadOffersData() {
    dispatch(fetchOffersList());
  },
});

export  {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
