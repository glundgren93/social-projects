import React from 'react';
import {Link} from 'react-router';

const Navbar = ({name}) => {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">{name}</Link>
        </div>
      </nav>
    )
}

export default Navbar;
