import React, {useEffect, useRef, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { placesPropTypes } from '../../common/prop-types';
import PropTypes from 'prop-types';

function Map({places, city, activePlaceId}) {

  const mapRef = useRef();
  const [mapLeaflet, setMapLeaflet] = useState(null);

  useEffect(() => {
    const {latitude, longitude, zoom} = city.location;

    const iconStandard = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 30],
    });
    const iconActive = leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [30, 30],
    });
    let map;

    if (!mapLeaflet) {
      map = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }).addTo(map);
      setMapLeaflet(map);
    } else {
      map = mapLeaflet;
    }

    map.setView({lat: latitude, lng: longitude}, zoom);

    const markers = places.map((place) => {
      const icon = place.id === activePlaceId ? iconActive : iconStandard;
      return leaflet
        .marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        }, {icon})
        .addTo(map)
        .bindPopup(place.title);
    });

    return () => {
      for (const marker of markers) {
        marker.remove();
      }
    };
  }, [places, activePlaceId, city.name, city.location, mapLeaflet]);


  return (
    <div style={{height: '100%'}} ref={mapRef} data-testid="map"></div>
  );
}

Map.propTypes = {
  places: placesPropTypes,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  activePlaceId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Map;
