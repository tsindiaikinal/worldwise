import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { ICity } from '../../interfaces/city.interface';
import { formatDate } from '../../helpers/formatDate';
import { useCities } from '../../context/cities/CitiesProvider';
import Button from '../ui/Button';
import styles from './CityItem.module.scss';

interface IProps {
  city: ICity
}

function CityItem({ city }: IProps) {
  const { currentCity, deleteCity } = useCities();

  const { cityName, emoji, date, position, id } = city;

  function handleDeleteCity(ev: MouseEvent) {
    ev.preventDefault();

    if (id) {
      deleteCity(id);
    }
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${currentCity.id === id ? styles['cityItem--active']: ''}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <Button
          type='delete'
          onClick={handleDeleteCity}
        >&times;
        </Button>
      </Link>
    </li>
  );
}

export default CityItem;
