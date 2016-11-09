import React from 'react';
import moment from 'moment';

const Footer = () =>{
  moment.locale('pt-br');

  return (
    <div className="row">
      <div className="col-md-12">
        <footer className="page-footer center-on-small-only">
            <div className="call-to-action">
                <h4>Brasília - DF, {moment().format('LL')}</h4>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    Feito por Gabriel Lundgren
                </div>
            </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer;
