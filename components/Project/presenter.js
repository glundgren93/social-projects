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
          <Jumbotron paragraph={project.description} />
        </div>
      </div>
    );
  }
}

export default Project;
