import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };
  
  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
      setShowDropdown(false);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      showMenu(false);
      setShowDropdown(false);
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
      {/* Dropdown */}
      <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/services" onClick={handleLinkClick}>Services<span className="arrow">&#x276F;</span></NavLink>
        {showDropdown && (
          <div classname= "dropdown-tab">
            <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/design" onClick={handleLinkClick}>Design Web</NavLink>
          </div>
        )}
      </div>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/portfolio" onClick={handleLinkClick}>Portfolio</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/contacter" onClick={handleLinkClick}>Nous Contacter</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;