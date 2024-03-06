import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../types/offer';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import { City } from '../types/city';
import useMap from '../hooks/useMap';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export default function Map(props: MapProps): JSX.Element {
  const { city, offers, selectedOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        }, {
          icon: (selectedOffer !== undefined && offer.title === selectedOffer.title)
            ? currentCustomIcon
            : defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '100%' }}
    >

    </div>
  );
}
