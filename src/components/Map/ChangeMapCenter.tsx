import { LatLngExpression } from 'leaflet';
import { useMap } from 'react-leaflet';

interface IProps {
  position: LatLngExpression
}

function ChangeMapCenter({ position }: IProps) {
  const map = useMap();
  map.setView(position);

  return null;
}

export default ChangeMapCenter;
