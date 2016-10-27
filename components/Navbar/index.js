import React from 'react';
import {Link} from 'react-router';

const Navbar = ({name}) => {
    return (
        <div>
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
            <div className="jumbotron">
                <div className="container">
                    <h1>Nome do Site!</h1>
                    <p>Conheça as ações sociais que irão ocorrer em breve! Fique atento no que irá rolar!</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
