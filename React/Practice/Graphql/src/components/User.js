import React, { useState } from 'react';
import { useQuery} from '@apollo/client';
import { GET_USER } from '../graphql/queries';


const User = () => {
  let [value, setValue] = useState(1);

  let { data, loading } = useQuery(GET_USER, {
    variables: { id: value }
  });
  console.log(data);

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        <h1>{data.user.name}</h1>
        <p>{data.user.phone}</p>
        <p>{data.user.email}</p>
      </div>
    </div>
  );
};

export default User;
