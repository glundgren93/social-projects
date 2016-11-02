import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectList extends Component {
  componentWillMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    const contentList = Object.keys(projects).map((key) => {
      return [
        <div className="col-md-4">
          <Link to={`/project/${projects[key].id}`} key={ projects[key].id}>
            <div className="thumbnail clearfix project-list-thumbnail">
              <img src={projects[key].imgPath} alt="..." className="img-circle"/>
              <div className="caption">
                <h3>{projects[key].name}</h3>
                <hr/>
                <p>{projects[key].briefDescription}</p>
                <p><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> {projects[key].date}</p>
              </div>
            </div>
          </Link>
        </div>
      ]
    });

    return (
      <div className="container">
        <div className="row">
        <h2 className="project-list-heading">Confira o que irá rolar em breve!</h2>
        <hr/>
        { contentList }
        </div>
      </div>
    );
  }
}

export default ProjectList;
