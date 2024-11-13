import Map from '../../components/Map/Map';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './AppPage.module.scss';

function AppPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppPage;
