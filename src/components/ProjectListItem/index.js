import React from 'react';
import { Link } from 'react-router';

const ProjectListItem = ({ project }) => {
    return (
      <div className="col-md-3 project-item">
        <Link to={`/project/${project.id}`} key={ project.id }>
          <div className="card wow fadeInUp">
              <div className="view overlay hm-white-slight center-on-small-only">
                  <img src={ project.imgPath } className="rounded-circle img-fluid" alt="" />
                  <div className="mask"></div>
              </div>
              <div className="card-block text-xs-center">
                  <h4 className="card-title">{project.name}</h4>
                  <hr/>
                  <p className="card-text">{ project.briefDescription }</p>
              </div>
          </div>
        </Link>
      </div>
    )
}
export default ProjectListItem;
