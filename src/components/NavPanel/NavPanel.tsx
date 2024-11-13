import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './NavPanel.module.scss';

function NavPanel() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.menu}>
        <li>
          <NavLink
            to='/product'
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pricing'
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.ctaLink}
            to='/login'
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPanel;
