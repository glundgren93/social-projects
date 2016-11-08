import React from 'react';
import moment from 'moment';

const Footer = () =>{
  moment.locale('pt-br')
  return (
    <footer className="footer navbar-fixed-bottom text-center">
      <h4>Brasília - DF,  {moment().format('MMMM D YYYY')}</h4>
      Feito por Gabriel Lundgren
    </footer>
  )
}

export default Footer;
