import NavMenu from '../../components/NavPanel/NavPanel';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <NavMenu />
      Page not found!
    </div>
  );
}

export default NotFoundPage;
