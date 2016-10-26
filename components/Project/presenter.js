import React, { Component } from 'react';

class Project extends Component {
  componentWillMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    const contentList = Object.keys(projects).map((key) => {
      return [
        <li>{projects[key].name}</li>,
        <li>{projects[key].location}</li>,
        <li>{projects[key].description}</li>,
      ]
    });

    return (
      <ul>{ contentList }</ul>
    );
  }
}

export default Project;
