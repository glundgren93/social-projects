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
          <div className="thumbnail clearfix">
            <img src="./images/a.jpg" alt="..."/>
            <div className="caption">
              <h3>{projects[key].name}</h3>
              <p>{projects[key].description}</p>
              <p>{projects[key].location}</p>
              <Link to={`/project/${projects[key].id}`} key={ projects[key].id}>Veja os detalhes!</Link>
            </div>
          </div>
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

export default ProjectList;
