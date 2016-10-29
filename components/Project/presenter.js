import React, { Component } from 'react';
import { Link } from 'react-router';

class Project extends Component {
  componentWillMount() {
    this.props.getProject(this.props.params.projectId);
  }

  render() {
    const { project } = this.props;

    return (
      <div className="container">
        <div className="row">
        {project.name}
        </div>
      </div>
    );
  }
}

export default Project;
