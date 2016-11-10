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
      <div>
        <div className="container">
            <div className="divider-new">
                <h2 className="h2-responsive wow fadeInDown">Confira o que irá rolar em breve!</h2>
            </div>
            <section id="best-features">
                <div className="row">
                  { contentList }
                </div>
            </section>
        </div>
      </div>
    );
  }
}

export default ProjectList;
