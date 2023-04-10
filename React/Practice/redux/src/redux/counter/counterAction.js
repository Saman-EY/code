let increase = (item) => {
  return {
    type: 'INCREASE_COUNTER',
    payload: item
  };
};

export default increase;
