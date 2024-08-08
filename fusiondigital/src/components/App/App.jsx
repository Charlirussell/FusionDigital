import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import NavBar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstruction'; 

import './App.scss';


function App() {
  const underConstruction = false;

  return (
      <div>
        <BackgroundVideo />
        {!underConstruction && <NavBar />} 
        <Routes>
          {underConstruction ? (
            <Route path="/" element={<UnderConstruction />} />
          ) : (
            <>
            <Route path="/accueil" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacter" element={<Contact />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
  );
};

export default App;

