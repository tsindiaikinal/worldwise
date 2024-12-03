import { Outlet } from 'react-router-dom';

import { useCities } from '../../context/cities/CitiesProvider';
import CityItem from '../CityItem/CityItem';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import styles from './CityList.module.scss';

function CityList() {
  const { cities, isLoading } = useCities();

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
