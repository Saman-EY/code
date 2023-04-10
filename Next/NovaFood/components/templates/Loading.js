import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
        <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Loading;
