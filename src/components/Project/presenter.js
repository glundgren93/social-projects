import 'rc-collapse/assets/index.css';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Jumbotron from '../Jumbotron';
import Collapse from 'rc-collapse';
import ReactDisqus from '../ReactDisqus';

class Project extends Component {
  componentWillMount() {
    this.props.getProject(this.props.params.projectId);
  }

  render() {
    const { project } = this.props;
    const Panel = Collapse.Panel;

    const collapse = (
      project && project.organizer && project.institution ?
      <Collapse accordion={false}>
        <Panel className="bold" header="O que?">{project.description}</Panel>
        <Panel header="Quando?">{project.date}</Panel>
        <Panel header="Onde?">{project.location}</Panel>
        <Panel header="Contato da Instituição">
          <ul>
            <li><span className="glyphicon glyphicon-user" aria-hidden="true"> </span> { project.institution.name  }</li>
            <li><span className="glyphicon glyphicon-envelope" aria-hidden="true"> </span> { project.institution.email  }</li>
            <li><span className="glyphicon glyphicon-phone" aria-hidden="true"> </span> { project.institution.phone  }</li>
          </ul>
        </Panel>
        <Panel header="Organizador da Ação">
          <ul>
            <li><span className="glyphicon glyphicon-user" aria-hidden="true"> </span> { project.organizer.name  }</li>
            <li><span className="glyphicon glyphicon-envelope" aria-hidden="true"> </span> { project.organizer.email  }</li>
            <li><span className="glyphicon glyphicon-phone" aria-hidden="true"> </span> { project.organizer.phone  }</li>
          </ul>
        </Panel>
      </Collapse>
      : 'Carregando'
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
        <hr/>
        <ReactDisqus shortname="socialprojects" identifier={project.id} />
      </div>
    );
  }
}

export default Project;
