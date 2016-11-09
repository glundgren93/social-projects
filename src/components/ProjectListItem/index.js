import React from 'react';
import { Link } from 'react-router';

const ProjectListItem = ({ project }) => {
    return (
      <div className="col-md-3">
          <div className="card">
              <div className="view overlay hm-white-slight">
                  <img src={ project.imgPath } className="rounded-circle" alt=""/>
              </div>
              <div className="card-block">
                  <h4 className="card-title">{project.name}</h4>
                  <p className="card-text">{ project.briefDescription }</p>
                  <p className="card-text">{ project.date }</p>
                  <Link className="btn btn-primary" to={`/project/${project.id}`} key={ project.id }>Veja mais</Link>
              </div>
          </div>
      </div>
    )
}
export default ProjectListItem;
