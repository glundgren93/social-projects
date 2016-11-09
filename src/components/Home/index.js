import React from 'react';
import ProjectList from '../ProjectList';
import Jumbotron from '../Jumbotron';
import Footer from '../Footer';

const Home = () => {
  return (
    <div className="home">
      <Jumbotron header="Fratres Sumus" paragraph="‘Amarás o teu próximo como a ti mesmo.’ Mateus 22:39"/>
      <ProjectList />
      <Footer />
    </div>
  )
}
export default Home;
