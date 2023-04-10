let initialValue = {
  counter: 0
};

let counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
