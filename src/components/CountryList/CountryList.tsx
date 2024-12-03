// import { Outlet } from 'react-router-dom';
import CountryItem from '../CountryItem/CountryItem';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
// import { ICountry } from '../../interfaces/country.interface';
import { ICity } from '../../interfaces/city.interface';
import styles from './CountryList.module.scss';
import { ICountry } from '../../interfaces/country.interface';
import { useCities } from '../../context/cities/CitiesProvider';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {return <Spinner />;}

  if (!cities.length) {return <Message message='Add your first country by clicking on a city on the map' />;}

  const countries = cities.reduce<ICity[] | ICountry[]>((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, {
        country: city.country,
        emoji: city.emoji }];
    }

    return arr;
  }
  , []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, idx) =>
        <CountryItem
          key={idx}
          country={country}
        />,
      )}
    </ul>
  );
}

export default CountryList;
