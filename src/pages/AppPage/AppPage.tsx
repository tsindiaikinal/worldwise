import Map from '../../components/Map/Map';
import Sidebar from '../../components/Sidebar/Sidebar';
import User from '../../components/User/User';
import { useAuth } from '../../context/auth/AuthProvider';
import styles from './AppPage.module.scss';

function AppPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.container}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}

export default AppPage;
