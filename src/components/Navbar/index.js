import React from 'react';
import {Link} from 'react-router';

const Navbar = ({name}) => {
    return (
      <nav className="navbar navbar-dark navbar-fixed-top scrolling-navbar">
        <div className="container">
         <Link className="navbar-brand" to="/">{name}</Link>
        </div>
      </nav>
    )
}

export default Navbar;
