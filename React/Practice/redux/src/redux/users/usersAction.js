import axios from 'axios';

const fetchUsersRequest = () => {
  return {
    type: 'REQUEST'
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: 'SUCCESS',
    payload: data
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: 'FAILURE',
    payload: error
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        let data = res.data;
        dispatch(fetchUsersSuccess(data));
      })
      .catch((err) => {
        let Message = err.message;
        dispatch(fetchUsersFailure(Message));
      });
  };
};

export default fetchUsers;
