import React, { Component } from 'react';
import { Link } from 'react-router';
import Jumbotron from '../Jumbotron';

class Project extends Component {
  componentWillMount() {
    this.props.getProject(this.props.params.projectId);
  }

  render() {
    const { project } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="page-header">
            <h1>{project.name} </h1>
          </div>
          <div className="media project-media">
            <div className="media-left media-middle">
              <img className="media-object" src={project.imgPath} alt="..." />
            </div>
            <div className="media-body">
              <div>
                <h2>O que?</h2>
                <h4 className="text-justify">{project.description}</h4>
              </div>
              <div>
                <h2>Quando?</h2>
                <h4 className="text-justify">{project.date}</h4>
              </div>
              <div>
                <h2>Onde?</h2>
                <h4 className="text-justify">{project.location}</h4>
              </div>
              <div>
                <h2>Contato</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
