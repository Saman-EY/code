import Link from 'next/link';
import React from 'react';

// SSR PAGE *

const Albums = ({ albums }) => {
  return (
    <>
      <h1>Albums</h1>
      <ul>
        {albums.map((item) => (
          <li key={item.id}>
            <Link href={`/albums/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Albums;

export let getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await res.json();

  return {
    props: {
      albums: data
    }
  };
};
