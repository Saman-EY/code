import React from 'react';
import Landing from './pages/Landing';
import BlogPage from './pages/BlogPage';
import AuthorPage from './pages/AuthorPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ScrollToUp from './helper/ScrollToUp';

const App = () => {
  return (
    <Layout>
      <ScrollToUp />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
