import React, { useState } from 'react';
import { CREATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

const CreateUser = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [username, setUsername] = useState('');

  let [MutationFunc, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: name,
        email: email,
        username: username
      }
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <input placeholder='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={MutationFunc}>submit</button>
    </div>
  );
};

export default CreateUser;
