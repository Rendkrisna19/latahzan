import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo Hijau.png"
import Logo1 from'../images/Logo Orange.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed w-full z-10 flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <img src={Logo} className="h-12 mr-3 gap-2" />
        <img src={Logo1} className="h-12 mr-3 gap-2" />
        
      </div>

      {/* Menu untuk Desktop */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/schedule" className="navbar-link">Schedule</Link>
        <Link to="/team" className="navbar-link">Team</Link>
        <Link to="/media" className="navbar-link">Media</Link>
        <Link to="/shop" className="navbar-link">Shop</Link>
        <Link to="/mavstv" className="navbar-link">MavsTV</Link>
        <Link to="/mavsinsider" className="navbar-link">Mavs Insider</Link>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Slide Menu untuk Mobile */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-ful p-4 transform transition-transform duration-300 fullscreen-sidebar ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-3xl mb-4 focus:outline-none"
          onClick={toggleMenu}
        >
          ✖
        </button>
        <Link to="/" className="block py-2 navbar-link " onClick={toggleMenu}>Home</Link>
        <Link to="/schedule" className="block py-2 navbar-link " onClick={toggleMenu}>Schedule</Link>
        <Link to="/team" className="block py-2 navbar-link" onClick={toggleMenu}>Team</Link>
        <Link to="/media" className="block py-2 navbar-link" onClick={toggleMenu}>Media</Link>
        <Link to="/shop" className="block py-2 navbar-link" onClick={toggleMenu}>Shop</Link>
        <Link to="/mavstv" className="block py-2 navbar-link" onClick={toggleMenu}>MavsTV</Link>
        <Link to="/mavsinsider" className="block py-2 navbar-link" onClick={toggleMenu}>Mavs Insider</Link>
      </div>
    </nav>
  );
};

export default Navbar;
