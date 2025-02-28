import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };
  
  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenu);
    return () =>{
      window.removeEventListener('resize', closeMenu);
    };
  }, []);

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`burger-icon ${showMenu ? 'close' : 'open'}`}></div>
      </div>
      <div className={`navbar ${showMenu ? 'show-menu' : ''}`}>
        <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/" onClick={handleLinkClick}>Accueil</NavLink>
        <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/services" onClick={handleLinkClick}>Services</NavLink>
        <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/contacter" onClick={handleLinkClick}>Nous Contacter</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;