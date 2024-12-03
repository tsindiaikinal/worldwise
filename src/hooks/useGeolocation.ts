import { useState } from 'react';

interface ICoords {
  lat: number
  lng: number
}

export function useGeolocation() {
  const [position, setPosition] = useState<ICoords | null>(null);
  const [erorr, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const coords = { lat, lng } = position;

  function getGeoPosition() {
    if (!navigator.geolocation) {
      return setError('Your browser is not supported geolocation!')
      ;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      },
    );
  }

  return { erorr, position, getGeoPosition, isLoading };
}
