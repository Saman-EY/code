import React, { useState } from 'react';
import { GET_USER } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';

const UserOnClick = () => {
  let [Id, setId] = useState(1);

  let ChangeHandle = (e) => {
    setId(e.target.value)
  }

  let [CustomFuncName, { loading, called, data, error }] = useLazyQuery(
    GET_USER,
    {
      variables: { id: Id }
    }
  );
  console.log({ data, called, loading, error });

  // if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <input
      placeholder='id'
        type="text"
        value={Id}
        onChange={ChangeHandle}
      />
      <button onClick={CustomFuncName}>submit</button>

      {data && (
        <div>
          <h1>{data.user.name}</h1>
          <p>{data.user.phone}</p>
          <p>{data.user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserOnClick;
