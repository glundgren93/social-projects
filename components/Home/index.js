import React from 'react';
import ProjectList from '../ProjectList';
import Jumbotron from '../Jumbotron';

const Home = () => {
  return (
    <div className="home">
      <Jumbotron header="Fratres Sumus" paragraph="‘Amarás o teu próximo como a ti mesmo.’ Mateus 22:39"/>
      <ProjectList />
    </div>
  )
}
export default Home;
