import React, { Component } from 'react';

class Project extends Component {
  componentWillMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    const contentList = Object.keys(projects).map((key) => {
      return [
        <div className="col-md-4">
          <h2>{projects[key].name}</h2>
          <p>{projects[key].location}</p>
          <p>{projects[key].description}</p>
          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
      ]
    });

    return (
      <div className="container">
        <div className="row">
        { contentList }
        </div>
      </div>
    );
  }
}

export default Project;
