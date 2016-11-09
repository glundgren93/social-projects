import React from 'react';
import moment from 'moment';

const Footer = () =>{
  moment.locale('pt-br');

  return (
    <footer className="page-footer center-on-small-only">
        <div className="call-to-action">
            <h4>Brasília - DF, {moment().format('LL')}</h4>
        </div>
        <div className="footer-copyright">
            <div className="container-fluid">
                © 2016 Copyright: Gabriel Lundgren
            </div>
        </div>
    </footer>
  )
}

export default Footer;
