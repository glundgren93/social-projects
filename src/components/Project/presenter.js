import React, { Component } from 'react';
import { Link } from 'react-router';
import Jumbotron from '../Jumbotron';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';

class Project extends Component {
  componentWillMount() {
    this.props.getProject(this.props.params.projectId);
  }

  render() {
    const { project } = this.props;
    const Panel = Collapse.Panel;

    const collapse = (
      <Collapse accordion={true}>
        <Panel className="bold" header="O que?">{project.description}</Panel>
        <Panel header="Quando?">{project.date}</Panel>
        <Panel header="Onde?">{project.location}</Panel>
        <Panel header="Contato">{project.date}</Panel>
      </Collapse>
    );

    return (
      <div>
          <div className="page-header text-center">
            <h1>{project.name} </h1>
          </div>
          <div className="col-md-12">
          <div className="media project-media">
            <div className="media-left media-middle">
              <img className="media-object img-thumbnail" src={project.imgPath} alt="..." />
            </div>
            <div className="media-body">
              {collapse}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
