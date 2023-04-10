import Link from 'next/link';
import styles from './Card.module.css';
import Location from '../icons/Location';
import Dollor from '../icons/Dollar';

const Card = (props) => {
  let { id, name, price, details, discount } = props;

  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt="img" />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollor />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}{' '}
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
};

export default Card;
