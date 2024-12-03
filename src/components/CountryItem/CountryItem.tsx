import { ICountry } from '../../interfaces/country.interface';
import styles from './CountryItem.module.scss';

interface IProps {
  country?: ICountry
}

function CountryItem({ country }: IProps) {
  return (
    <li className={styles.countryItem}>
      <span>{country?.emoji}</span>
      <span>{country?.country}</span>
    </li>
  );
}

export default CountryItem;
