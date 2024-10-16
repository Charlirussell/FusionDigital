import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstruction'; 

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';


function App() {

  const underConstruction = false;

  const location = useLocation();

  useEffect(() => { 
    if (location.pathname === '/') {
      document.body.classList.add('home');
    } else {
      document.body.classList.remove('home');
    }
  }, [location.pathname]);

  return (
        <>
          {!underConstruction && <NavBar />}
          <Routes>
            {underConstruction ? (
              <Route path="/" element={<UnderConstruction />} />
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacter" element={<Contact />} />
              </>
            )}
          </Routes>
          <ToastContainer />
          <Footer />
        </>
  )
};

export default App;