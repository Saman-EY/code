import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
          <h2>CARVANA</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>CARVANA Project &copy;</footer>
    </>
  );
};

export default Layout;
