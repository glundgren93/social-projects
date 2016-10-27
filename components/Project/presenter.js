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
          <div className="thumbnail clearfix">
            <img src="./images/a.jpg" alt="..."/>
            <div className="caption">
              <h3>{projects[key].name}</h3>
              <p>{projects[key].description}</p>
              <p>{projects[key].location}</p>
              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
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

export default Project;
