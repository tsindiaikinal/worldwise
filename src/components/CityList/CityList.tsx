import { Outlet } from 'react-router-dom';
import { ICity } from '../../interfaces/city.interface';
import CityItem from '../CityItem/CityItem';
import Spinner from '../Spinner/Spinner';
import styles from './CityList.module.scss';
import Message from '../Message/Message';

interface IProps {
  cities: ICity[]
  isLoading: boolean
}

function CityList({ cities, isLoading }: IProps) {

  if (isLoading) {return <Spinner />;}

  if (!cities.length) {return <Message message='Add your first city by clicking on a city on the map' />;}

  return (
    <>
      <Outlet />
      <ul className={styles.cityList}>
        {cities.map(city =>
          <CityItem
            key={city.id}
            city={city}
          />,
        )}
      </ul>
    </>
  );
}

export default CityList;
