import React, { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

const typesParams = {
  MAIN: {
    mixClass: 'cities__map',
    height: 736,
  },
  PROPERTY: {
    mixClass: 'property__map',
    height: 579,
  },
};

function Map({location, offers, type, activeOfferId}) {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map('map', {
      center: {
        lat: location.latitude,
        lng: location.longitude,
      },
      zoom: location.zoom,
    });

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
      .addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [location]);

  useEffect(() => {
    offers.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin${point.id === activeOfferId ? '-active' : ''}.svg`,
        iconSize: [30, 30],
      });

      leaflet
        .marker(
          {
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          {
            icon: customIcon,
          },
        )
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.removeLayer(leaflet);
      }
    };
  }, [offers, activeOfferId]);

  return (
    <section className={`${typesParams[type].mixClass || ''} map`}>
      <div
        id="map"
        style={{height: `${typesParams[type].height}px`}}
        ref={mapRef}
      >
      </div>
    </section>
  );
}

Map.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.oneOf(['MAIN', 'PROPERTY']).isRequired,
  activeOfferId: PropTypes.number,
};

export default Map;
