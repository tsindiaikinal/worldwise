import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';
import { useEffect, useState } from 'react';
import { useCities } from '../../context/cities/CitiesProvider';
import ChangeMapCenter from './ChangeMapCenter';
import { LatLngExpression } from 'leaflet';
import DetectClickMap from './DetectClickMap';
import { useGeolocation } from '../../hooks/useGeolocation';
import Button from '../ui/Button';
import { useUrlPosition } from '../../hooks/useUrlPosition';

function Map() {
  const { cities } = useCities();
  const [mapLat, mapLng] = useUrlPosition();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([40, 0]);
  const { isLoading: isLoadingPosition, position: geoPosition, getGeoPosition } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) {setMapPosition([mapLat, mapLng]);}
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoPosition) {setMapPosition([geoPosition.lat, geoPosition.lng]);}

    return () => {};
  }, [geoPosition]);

  return (
    <div
      className={styles.mapContainer}
    >
      {!geoPosition &&
      <Button
        type='position'
        onClick={getGeoPosition}
      >{isLoadingPosition ? 'Loading...' : 'Use your position'}
      </Button>
      }
      <MapContainer
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {cities.map((city) =>
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span className={styles.emoji}>{city.emoji}</span>
              <h3 className={styles.name}>{city.cityName}</h3>
            </Popup>
          </Marker>,
        )}
        <ChangeMapCenter position={mapPosition} />
        <DetectClickMap />
      </MapContainer>
    </div>
  );
}

export default Map;
