import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import NavBar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstruction'; 
import './App.scss';

function App() {
  const underConstruction = true;

  return (
      <div>
        <BackgroundVideo />
        {!underConstruction && <NavBar />} 
        <Routes>
          {underConstruction ? (
            <Route path="/" element={<UnderConstruction />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
        <Footer />
      </div>
  );
};

export default App;

