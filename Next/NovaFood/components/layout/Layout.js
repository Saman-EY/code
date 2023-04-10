import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <section className={styles.container}>
      <section>
        <header className={styles.header}>
          <div className={styles.left}>
            <Link href={'/'}>NovaFood</Link>
          </div>
          <div className={styles.right}>
            <Link href={'/menu'}>Menu</Link>
            <Link href={'/categories'}>Categories</Link>
          </div>
        </header>
        <div >{children}</div>
      </section>
      <footer className={styles.footer}>
        Next.js | NovaFood Project &copy;
      </footer>
    </section>
  );
};

export default Layout;
