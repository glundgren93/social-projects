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
      <div className="container-fluid ">
       <div className="row">
          <div className="page-header text-center">
            <h1>{project.name} </h1>
          </div>
          <div className="col-md-2">
            <div className="project-media">
                <img className="img-thumbnail" src={project.imgPath} alt="..." />
            </div>
          </div>
          <div className="col-md-10">
            {collapse}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
