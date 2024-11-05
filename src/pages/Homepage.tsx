import { Outlet } from 'react-router-dom';
import NavMenu from '../components/NavMenu/NavMenu';

function Homepage() {
  return (
    <div>
      Homepage
      <NavMenu />
      <Outlet />
    </div>
  );
}

export default Homepage;
