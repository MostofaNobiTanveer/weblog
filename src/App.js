import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { BlogDetails, Blogs, Home, Signin, Signup } from './pages';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
