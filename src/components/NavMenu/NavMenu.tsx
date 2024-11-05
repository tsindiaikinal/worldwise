import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.scss';

function NavMenu() {
  const activeClassName = ({ isActive, isPending }: {
    isActive: boolean
    isPending: boolean
  }) => `
  ${styles.menuLink}
  ${isPending
      ?
      styles.pending
      : isActive
        ?
        styles.active
        : ''
  }`;

  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <NavLink
            className={activeClassName}
            to='/product'
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeClassName}
            to='/pricing'
          >Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeClassName}
            to='/'
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
