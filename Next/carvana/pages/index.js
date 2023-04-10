import Categories from '../components/template/Categories';
import Searchbar from '../components/template/Searchbar';
import CarsPage from '../components/CarsPage';
import styles from '../styles/Home.module.css';
import carsData from '../data/carsdata';
import Link from 'next/link';

export default function Home() {
  let data = carsData.slice(0, 3);

  return (
    <>
      <Searchbar />
      <Categories />
      <div className={styles.container}>
        <Link href={'/cars'} className={styles.Btn}>
          See all cars
        </Link>
      </div>
      <CarsPage data={data} />
    </>
  );
}
