import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';


const Users = () => {
  let { data, loading, error } = useQuery(GET_USERS);
  console.log({ data, loading, error });
  console.log(data);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {data.users.data.map((i) => (
        <div key={i.id}>
          <h1>{i.name}</h1>
          <p>{i.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
