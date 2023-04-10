import Link from 'next/link';
import React from 'react';

const Users = ({ data }) => {
    return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;

export async function getStaticProps() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();

  return {
    props: {
      data
    }
  };
}
