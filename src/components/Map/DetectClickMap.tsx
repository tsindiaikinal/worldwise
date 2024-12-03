import { useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

function DetectClickMap() {
  const navigate = useNavigate();
  useMapEvents({
    click: (ev) => {
      navigate(`form?lat=${ev.latlng.lat}&lng=${ev.latlng.lng}`);
    },
  });

  return null;
}

export default DetectClickMap;
