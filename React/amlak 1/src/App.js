import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// components
import Website from './pages/Website';
import Dashboard from './pages/Dashboard';
import AddEstate from './components/Dashboard/AddEstate';
import Landing from './pages/Landing';
import Category from './pages/Category';
import DProfile from './components/Dashboard/DProfile';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Website />}>
          <Route path="/" element={<Landing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="AddEstate" element={<AddEstate />} />
          <Route path='Proflie' element={<DProfile />} />
        </Route>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
