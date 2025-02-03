import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure the path is correct
const Navbar = () => {
  return (
    <nav className="navbar">
        <h1> Simple Website</h1>
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/conatct">Contact</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;
