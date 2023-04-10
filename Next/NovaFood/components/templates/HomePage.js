import styles from './HomePage.module.css';
import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import Definition from '../modules/Definition';
import Companies from '../modules/Companies';
import Instructions from '../modules/Instructions';
import Guide from '../modules/Guide';
import Restrictions from '../modules/Restrictions';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instructions />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default HomePage;
