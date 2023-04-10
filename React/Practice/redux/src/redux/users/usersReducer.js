const initialState = {
  loading: false,
  users: [],
  error: ''
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'SUCCESS':
      return {
        loading: false,
        users: action.payload
      };
    case 'FAILURE':
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
