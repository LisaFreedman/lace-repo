/* eslint-disable */
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import React from 'react';

const Navbar = () => (
  <nav className="pa3 pa4-ns">
    <img src="\client\public\images\logo.png" alt="logo" height="42" width="42">
    
        <SearchBar/>
        <Link to="/signup" className="link dim gray f6 f5-ns dib mr3" title="signup">
          Sign Up
    </Link>
        <Link to="/login" className="link dim gray f6 f5-ns dib mr3" title="login">
          Login
    </Link>
        <Link to="/test" className="link dim gray f6 f5-ns dib mr3" title="Shortcut for testing">
          Test!
    </Link>
        <Link to="/User" className="link dim gray f6 f5-ns dib mr3" title="User Page">
          User Page
    </Link>
      </nav>
    )
  
export default Navbar;
