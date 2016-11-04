import React from 'react';
import { Link } from 'react-router';

const ProjectListItem = ({ project }) => {
    return (
      <div className="col-md-3">
        <Link to={`/project/${project.id}`} key={ project.id }>
          <div className="thumbnail clearfix project-list-thumbnail text-center">
            <img src={ project.imgPath } alt="..." className="img-circle"/>
            <div className="caption">
              <h3>{project.name}</h3>
              <hr/>
              <p>{ project.briefDescription }</p>
              <p><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span> { project.date }</p>
            </div>
          </div>
        </Link>
      </div>
    )
}
export default ProjectListItem;
