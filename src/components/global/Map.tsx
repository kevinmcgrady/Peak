'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const Map = () => {
  const params = useSearchParams();

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lat, setLat] = useState(Number(params.get('lat')));
  const [lng, setLng] = useState(Number(params.get('lng')));
  const [zoom, setZoom] = useState(15.5);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      accessToken: process.env.NEXT_PUBLIC_MAP_API_KEY,
      style: 'mapbox://styles/mapbox/light-v11',

      pitch: 45,
      bearing: -17.6,
    });

    map.current.on('style.load', () => {
      const layers = map.current.getStyle().layers;
      const labelLayerId = layers.find(
        (layer: any) => layer.type === 'symbol' && layer.layout['text-field'],
      ).id;

      map.current.addLayer(
        {
          id: 'add-3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',

            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height'],
            ],
            'fill-extrusion-opacity': 0.6,
          },
        },
        labelLayerId,
      );
    });
  }, [lat, lng, zoom]);

  return <div ref={mapContainer} className='h-full rounded-xl' />;
};
