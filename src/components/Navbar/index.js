import React from 'react';
import {Link} from 'react-router';

const Navbar = ({name}) => {
    return (
      <nav className="navbar navbar-dark navbar-fixed-top scrolling-navbar">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
            <i className="fa fa-bars"></i>
        </button>
        <div className="container">
            <div className="collapse navbar-toggleable-xs" id="collapseEx">
                <Link className="navbar-brand" to="/">{name}</Link>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;
