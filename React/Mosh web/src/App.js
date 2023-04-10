import React from 'react';
// style
import './App.css';
// components
import Header from './components/Header';
import Search from './components/Search';
import Subscription from './components/Subscription';
import CloudHost from './components/CloudHost';
import ControlPanel from './components/ControlPanel';
import Comments from './components/Comments';
import MessageBox from './components/MessageBox';
import Footer from './components/Footer';

const App = () => {
  // 
  return (
    <>
      <Header />
      <div className="MainContainer">
        <Search />
        <Subscription />
        <CloudHost />
      </div>
      <ControlPanel />
      <Comments />
      <MessageBox />
      <Footer/>
    </>
  );
};

export default App;
