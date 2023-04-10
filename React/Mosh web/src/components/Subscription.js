import React, { useState } from 'react';
// components
import Card from './Card';
import PopularCard from './PopularCard';
// style
import '../styles/Subscription.css';

const Subscription = () => {
  let [cardDetails, setDetails] = useState({
    subs: [
      { id: 1, price: 14, storage: 100, ram: 3 },
      { id: 2, price: 18, storage: 120, ram: 6 },
      { id: 3, price: 24, storage: 160, ram: 9 }
    ]
  });

  let { subs } = cardDetails;

  return (
    <section data-aos="fade-up" className="SubContainer">
      <Card price={subs[0].price} storage={subs[0].storage} ram={subs[0].ram} />
      <PopularCard price={subs[1].price} storage={subs[1].storage} ram={subs[1].ram} />
      <Card price={subs[2].price} storage={subs[2].storage} ram={subs[2].ram} />
    </section>
  );
};

export default Subscription;
