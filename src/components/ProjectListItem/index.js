import React from 'react';
import { Link } from 'react-router';

const ProjectListItem = ({ project }) => {
    return (
      <div className="col-md-3">
        <div className="card wow fadeInUp">
            <div className="view overlay hm-white-slight center-on-small-only">
                <img src={ project.imgPath } className="rounded-circle img-fluid" alt="" />
            </div>
            <div className="card-block text-xs-center">
                <h4 className="card-title">{project.name}</h4>
                <hr/>
                <p className="card-text">{ project.briefDescription }</p>
                <Link className="btn btn-primary" to={`/project/${project.id}`} key={ project.id }>Veja mais</Link>
            </div>
        </div>
    </div>
    )
}
export default ProjectListItem;
