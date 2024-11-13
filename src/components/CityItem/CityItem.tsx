import { ICity } from '../../interfaces/city.interface';
import styles from './CityItem.module.scss';
import { formatDate } from '../../helpers/formatDate';

interface IProps {
  city: ICity
}

function CityItem({ city }: IProps) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time
        dateTime=''
        className={styles.date}
      >
        {formatDate(date)}
      </time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
