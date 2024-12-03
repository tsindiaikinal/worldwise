import { useNavigate, useParams } from 'react-router-dom';
import { formatDate } from '../../helpers/formatDate';
import Spinner from '../Spinner/Spinner';
import styles from './City.module.scss';
import { useCities } from '../../context/cities/CitiesProvider';
import Button from '../ui/Button';
import { useEffect } from 'react';

function City() {
  const { id } = useParams();
  const { currentCity, isLoading, getCity } = useCities();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }

    getCity(id);
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) {return <Spinner />;}

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
        <p>{formatDate(date || Date.now())}</p>
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
        <Button
          type='back'
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default City;
