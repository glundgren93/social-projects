import 'rc-collapse/assets/index.css';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Jumbotron from '../Jumbotron';
import ReactDisqus from '../ReactDisqus';
import Footer from '../Footer';

class Project extends Component {
  componentWillMount() {
    this.props.getProject(this.props.params.projectId);
  }

  render() {
    const { project } = this.props;

    const contacts = (
      project && project.organizer && project.institution ?
      <div className="col-md-4">
        <div className="widget-wrapper">
          <h4>Contato da Instituição:</h4>
          <br/>
          <div className="card">
              <div className="card-block">
                  <p><span><i className="fa fa-user prefix"></i> { project.institution.name  }</span></p>
                  <p><span><i className="fa fa-envelope prefix"></i> { project.institution.email  }</span></p>
                  <p><span><i className="fa fa-phone prefix"></i> { project.institution.phone  }</span></p>
              </div>
          </div>
        </div>
        <div className="widget-wrapper">
          <h4>Organizador da Ação:</h4>
          <br/>
          <div className="card">
                <div className="card-block">
                  <p><span><i className="fa fa-user prefix"></i> { project.organizer.name  }</span></p>
                  <p><span><i className="fa fa-envelope prefix"></i> { project.organizer.email  }</span></p>
                  <p><span><i className="fa fa-phone prefix"></i> { project.organizer.phone  }</span></p>
                </div>
          </div>
        </div>
      </div>
      : 'Carregando'
    );

    return (
      <div>
      <main>
        <div className="container">
          <div className="row">
            {contacts}
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-wrapper">
                    <div className="view overlay hm-white-light z-depth-1-half">
                      <img src={project.imgPath} className="img-fluid" alt=""/>
                      <div className="mask">
                      </div>
                    </div>
                    <br/>
                    <h2 className="h2-responsive">{project.name}</h2>
                    <hr/>
                    <p><span><i className="fa fa-info-circle"></i> {project.description}</span></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="reviews">
                    <h2 className="h2-responsive">Quando?</h2>
                    <hr/>
                    <p><span><i className="fa fa-calendar"></i> {project.date}</span></p>
                </div>
              </div>
              <div className="row">
                <div className="reviews">
                    <h2 className="h2-responsive">Onde?</h2>
                    <hr/>
                    <p><span><i className="fa fa-location-arrow"></i> {project.location}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr/>
        <ReactDisqus shortname="socialprojects" identifier={project.id} />
      </main>
      <Footer />
      </div>
    );
  }
}

export default Project;
