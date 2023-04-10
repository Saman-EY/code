import Card from './template/Card';
import Back from "./icons/Back"
import styles from "../styles/CarsList.module.css"
import { useRouter } from 'next/router';

const CarsList = ({ data }) => {

  let router = useRouter();

  let clickHandler = () => {
    router.back();
  }

  return (
    <section className={styles.container}>
      <div className={styles.back} onClick={clickHandler}>
        <Back />
        <p>back</p>
      </div>

      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CarsList;
