import React from 'react';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router';
import Footer from './Component/Footer';
import SyncUser from './SyncUser/SyncUser';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <SyncUser/>
      <div> <Navbar /> </div>
      <div> <Outlet /> </div>
      <div> <Footer /> </div>
      <ToastContainer />
    </div>
  );
};

export default App;