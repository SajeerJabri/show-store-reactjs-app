import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';
const Navbar = () => {
    return (
        <div className="header">
        <div className="logoSection">
        <Link to="/">
        <img src={logo} alt="logo"/>
        </Link>
        </div>
            <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
}

export default Navbar;
