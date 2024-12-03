// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import { GEOCODING_URL } from '../../constants/api.constant';
import { apiFetcher } from '../../services/apiFetcher.service';
import { convertToEmoji } from '../../helpers/convertToEmoji';
import styles from './Form.module.scss';
import { ICountry } from '../../interfaces/country.interface';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import { useCities } from '../../context/cities/CitiesProvider';

function Form() {
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>('');
  const [country, setCountry] = useState<ICountry | null>(null);
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState<string>('');
  const [geoCodingError, setGeoCodingError] = useState<string>('');
  const navigate = useNavigate();
  const { postNewCity, isLoading } = useCities();

  useEffect(() => {
    async function getGeoCoding() {
      try {
        setIsLoadingGeocoding(true);
        setGeoCodingError('');

        const geocode = await apiFetcher(`${GEOCODING_URL}?latitude=${lat}&longitude=${lng}`);

        setCityName(geocode.cityName || geocode.locality || '');
        setCountry(
          {
            country: geocode.countryName,
            emoji: convertToEmoji(geocode.countryCode),
          },
        );

        if (!geocode.countryCode) {
          throw new Error('It seems that this is not a city. Please click in another place 😉');
        }

      } catch (error) {
        const err = error as Error;

        setGeoCodingError(err.message);
        throw new Error(err.message);

      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    getGeoCoding();

    return () => {};
  }, [lat, lng]);

  if (isLoadingGeocoding) {
    return <Spinner />;
  }

  if (geoCodingError) {
    return <Message message={geoCodingError} />;
  }

  const handleBackToPrevHistory = (ev: MouseEvent) => {
    ev.preventDefault();
    navigate(-1);
  };

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    if (!cityName || !date) {
      return;
    }

    const newCity = {
      country: country?.country,
      emoji: country?.emoji,
      cityName,
      date,
      notes,
      position: { lat, lng },
    };

    await postNewCity(newCity);
    navigate('/app/cities');
  }

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ''}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span className={styles.flag}>{country?.emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <DatePicker
          id='date'
          selected={date}
          dateFormat='dd.MM.yyyy'
          onChange={(date) => setDate(date)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea
          id='notes'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type='primary'
          onClick={() => {}}
        >Add
        </Button>
        <Button
          type='back'
          onClick={handleBackToPrevHistory}
        >&larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
