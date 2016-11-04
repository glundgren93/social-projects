import React, { Component } from 'react';
import ProjectListItem from '../ProjectListItem';

class ProjectList extends Component {
  componentWillMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    const contentList = Object.keys(projects).map((key) => {
      return [
        <ProjectListItem project={projects[key]}/>
      ]
    });

    return (
      <div className="container">
        <div className="row">
        <h2 className="text-center">Confira o que irá rolar em breve!</h2>
        <hr/>
        { contentList }
        </div>
      </div>
    );
  }
}

export default ProjectList;
