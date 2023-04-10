import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../redux/users/usersAction';

const Users = () => {
  let UserData = useSelector((state) => state.userState);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {UserData.loading && (
        <h1>Loading</h1>
      ) || UserData.error && (
        <h1>{UserData.error}</h1>
      ) || UserData.users.length !== 0 && (
        UserData.users.map((item) => <p key={item.id}>{item.name}</p>)
      )}

    </div>
  );
};

export default Users;
