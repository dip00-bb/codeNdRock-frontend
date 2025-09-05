import React from 'react';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Outlet /> </div>
      <div> <Footer /> </div>
    </div>
  );
};

export default App;