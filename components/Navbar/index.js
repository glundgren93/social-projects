import React from 'react';
import {Link} from 'react-router';

const Navbar = ({name}) => {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" to="/">{name}</Link>
              </div>
          </div>
      </nav>
    )
}

export default Navbar;
