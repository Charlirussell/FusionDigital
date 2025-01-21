import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Design from '../Design/Design';
import Development from '../Development/Development';
import Marketing from '../Marketing/Marketing';
import Graphics from '../Graphics/Graphics';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstruction'; 

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';


function App() {

  const underConstruction = true;

  const location = useLocation();

  /* useEffect to manage the body's class based on the current route, to allow for the different background image on home page */
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
                <Route path="/services" element={<Services />} />
                <Route path="/design" element={ <Design />} />
                <Route path="/development" element={ <Development />} />
                <Route path="/marketing" element= { <Marketing />} />
                <Route path="/graphics" element= { <Graphics />} />
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