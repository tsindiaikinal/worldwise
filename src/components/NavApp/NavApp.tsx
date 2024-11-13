import { NavLink } from 'react-router-dom';
import styles from './NavApp.module.scss';

function NavApp() {

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='cities'>cities</NavLink>
        </li>
        <li>
          <NavLink to='country'>countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavApp;
