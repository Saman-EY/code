import styles from '../styles/404.module.css';

const PageNotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.message}>
        <h1>You have found a page that doesnt exist.</h1>
      </div>
    </section>
  );
};

export default PageNotFound;
