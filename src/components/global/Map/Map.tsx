'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import { Property } from '@prisma/client';
import { MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { MapRef } from 'react-map-gl';
import Map, { Layer, Marker, Popup } from 'react-map-gl';

import { PropertyFeatureCard } from '../../property/PropertyFeatureCard';
import { buildingsLayer } from './utils/buildingsLayer';

type MapComponentProps = {
  property: Property;
};

export const MapComponent = ({ property }: MapComponentProps) => {
  const mapRef = useRef<MapRef | null>(null);
  const lat = Number(property.lat);
  const lng = Number(property.lng);

  useEffect(() => {
    if (mapRef?.current) {
      mapRef.current.panTo({
        lat: lat,
        lng: lng,
      });
    }
  }, [lat, lng]);

  return (
    <div className='w-full h-full relative overflow-hidden rounded-xl'>
      <Map
        style={{ overflow: 'hidden' }}
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_API_KEY}
        dragPan={false}
        scrollZoom={false}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15.5,
          pitch: 60,
          bearing: -17.6,
        }}
        mapStyle='mapbox://styles/mapbox/light-v11'
      >
        <Layer {...buildingsLayer} />

        <Marker longitude={lng} latitude={lat} anchor='center'>
          <MapPin size={18} className='fill-secondary stroke-none' />
        </Marker>
        <Popup
          latitude={lat}
          longitude={lng}
          closeButton={false}
          maxWidth='400'
          offset={20}
        >
          <PropertyFeatureCard property={property} />
        </Popup>
      </Map>
    </div>
  );
};
