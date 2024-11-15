import { formatDate } from '../../helpers/formatDate';
import { ICity } from '../../interfaces/city.interface';
import Spinner from '../Spinner/Spinner';
import styles from './City.module.scss';

interface IProps {
  city: ICity
  isLoading: boolean
}

function City({ city, isLoading }: IProps) {
  if (isLoading) {return <Spinner />;}

  // TEMP DATA
  /*   const currentCity = {
    cityName: 'Lisbon',
    emoji: '🇵🇹',
    date: '2027-10-31T15:59:59.138Z',
    notes: 'My favorite city so far!',
  }; */

  // const { cityName, emoji, date, notes } = currentCity;
  const { cityName, emoji, date, notes } = city;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || '')}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target='_blank'
          rel='noreferrer'
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        {/* <ButtonBack /> */}
      </div>
    </div>
  );
}

export default City;
