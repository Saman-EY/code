import styles from '../styles/CarsPage.module.css';
import Card from './template/Card';

const CarsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CarsPage;
