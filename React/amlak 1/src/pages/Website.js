import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Landing from './Landing';
import Footer from '../components/Footer';
import Category from './Category';

const Website = () => {
  return (
    <div className='bg-Semiblack'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Website;
