import React from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';

const App = ({ children }) => {
  return (
    <div>
      <Navbar name="Social Project App"/>
      <div>
        {children}
      </div>
    </div>
  )
}
export default App;
