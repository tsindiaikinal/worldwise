import { Outlet } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavApp from '../NavApp/NavApp';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <NavApp />
      <p>List of cities</p>
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;

