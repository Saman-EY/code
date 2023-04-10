import styles from './CategoriesPage.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '../modules/Card';

function CategoriesPage({data}) {
  const initialState = {
    difficulty: '',
    time: ''
  };

  const router = useRouter();

  let [query, setQuery] = useState(initialState);

  console.log(router);

  useEffect(() => {
    const {
      query: { difficulty, time }
    } = router;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  };

  const searchHandler = () => {
    router.push({
      query: { difficulty: query.difficulty, time: query.time }
    });
  };

  if (!data) {
    return <h1>loading</h1>
  }

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            onChange={changeHandler}
            name="difficulty"
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} onChange={changeHandler} name="time">
            <option value="">Cooking Time</option>
            <option value="more">More than 30 minutes</option>
            <option value="less">Less that 30 minutes</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
      </div>
      <div className={styles.cards}>
        {!data.length ? <img src="/images/search.png" alt="image" /> : data.map((item) => <Card key={item.id} {...item} /> )}
      </div>
    </div>
  );
}

export default CategoriesPage;
