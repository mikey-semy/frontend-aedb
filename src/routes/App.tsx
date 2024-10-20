import React from 'react';

import { Outlet } from "react-router-dom";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';



const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main"> 
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
