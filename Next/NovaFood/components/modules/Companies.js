import styles from './Companies.module.css';
import SpaceX from "../icons/SpaceX"
import Apple from "../icons/Apple"
import Binance from "../icons/Binance"
import Tesla from "../icons/Tesla"

const Companies = () => {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
};

export default Companies;
