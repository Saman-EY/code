import { useState } from 'react';
import styles from '../../styles/Searchbar.module.css';
import { useRouter } from 'next/router';

const Searchbar = () => {
  let [min, setMin] = useState('');
  let [max, setMax] = useState('');
  let router = useRouter();

  let searchHandler = () => {
    if (!min || !max) {
      alert('please fill the min and max sections!');
    } else if (!/^\d+$/.test(min) || !/^\d+$/.test(max)) {
      alert('please enter digits');
    } else {
      router.push(`/filter/${min}/${max}`);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default Searchbar;
