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
          <div className="row heading">
            <div className="col-md-12">
              <h2 className="h2-responsive"><strong>Confira o que irá rolar em breve!</strong></h2>
            </div>
          </div>
          <div className="row">
            { contentList }
          </div>
      </div>
    );
  }
}

export default ProjectList;
