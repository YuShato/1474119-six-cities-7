import React, {useEffect, useRef} from 'react';
import {PropTypes} from 'prop-types';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapParams } from '../../consts/consts';

function Map ({offers}) {
  const ZOOM = MapParams.ZOOM;

  const map = useRef();

  useEffect(() => {
    map.current = leaflet.map('map', {
      center: {
        lat: MapParams.CENTER.lat,
        lng: MapParams.CENTER.lng,
      },
      zoom: ZOOM,
      zoomControl: false,
    });

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
      )
      .addTo(map.current);

    offers.forEach((point) => {
      const icon = leaflet.icon({
        iconUrl: MapParams.ICON.iconUrl,
        iconSize: MapParams.ICON.iconSize,
        iconAnchor: MapParams.ICON.iconAnchor,
      });

      leaflet
        .marker(
          {
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          {
            icon: icon,
          },
        )
        .addTo(map.current)
        .bindPopup(point.title);
    });

    return () => {
      map.current.remove();
    };
  }, []);

  return (
    <section
      id='map'
      className='cities__map map'
      style={{height: '90vh'}}
      ref={map}
    />
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
