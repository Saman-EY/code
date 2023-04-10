import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//componet
import Login from './components/Login';
import Chat from './components/Chat';
import AuthContextProvider from './context/AuthContextProvider';

const App = () => {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path={'/chat'} component={Chat} />
        <Route path={'/login'} component={Login} />
        <Redirect to={'/login'} />
      </Switch>
    </AuthContextProvider>
  );
};

export default App;
