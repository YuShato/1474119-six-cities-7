import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlaceList from '../../place-list/place-list';
import Map from '../../map/map';
import CitiesList from '../../cities-list/cities-list';
import MainEmptyPage from '../main-empty-page/main-empty-page';
import Header from '../../layouts/header/header';
import SortingList from '../../sorting-list/sorting-list';
import LoadingScreen from '../../layouts/loading-screen/loading-screen';
import { fetchPlaceList } from '../../../store/api-actions';
import { getPlacesCity, sortPlaces } from '../../../common/utils';
import { PlaceName } from '../../../common/const';

function MainPage() {
  const {isDataLoaded, places} = useSelector((state) => state.DATA);
  const {activeCity, activeSorting} = useSelector((state) => state.PLACES);
  const placesCurrent = sortPlaces(getPlacesCity(places, activeCity), activeSorting);
  const {activePlaceId} = useSelector((state) => state.PLACES);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchPlaceList());
    }
  }, [dispatch, isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${placesCurrent.length > 0 ? '' : 'page__main--index-empty'}`} data-testid="main">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <div id="error-wrapper"></div>
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities" data-testid="cities">
          {placesCurrent.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCurrent.length} places to stay in {activeCity}</b>
                <SortingList />
                <div className="cities__places-list places__list tabs__content" data-testid="places">
                  <PlaceList places={placesCurrent} placeName={PlaceName.MAIN.type}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={placesCurrent[0].city} places={placesCurrent} activePlaceId={activePlaceId}/>
                </section>
              </div>
            </div>
            : <MainEmptyPage activeCity={activeCity}/>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
