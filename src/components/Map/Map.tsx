import { Link } from 'react-router-dom';
import styles from './Map.module.scss';

function Map() {
  return (
    <div className={styles.mapContainer}>
      <Link
        className={styles.map}
        to='form'
      >
        FORM ⚗
      </Link>
    </div>
  );
}

export default Map;
