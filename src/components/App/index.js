import React from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Footer from '../Footer';

const App = ({ children }) => {
  return (
    <div>
      <Navbar name="Social Project App"/>
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default App;
