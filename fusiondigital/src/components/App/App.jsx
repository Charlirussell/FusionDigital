import React from 'react';
import { Routes, Route } from 'react-router-dom';
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