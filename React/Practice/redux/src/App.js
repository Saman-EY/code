import React from 'react';
import Counter from './components/Counter';
import Number from './components/Number';
import { Provider } from 'react-redux';
import store from './redux/store';
import Users from './components/Users';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Number />
      <Users />
    </Provider>
  );
};

export default App;