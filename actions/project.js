import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

export const ROOT_URL = 'https://social-projects-fbe1f.firebaseio.com/projects.json';
export const ROOT_URL_BY_ID = 'https://social-projects-fbe1f.firebaseio.com/projects/byId/';

const setProjects = (projects) => ({type: actionTypes.PROJECT_LIST_SET, projects});

const setProject = (project) => ({type: actionTypes.GET_PROJECT, project});

export const getProject = (projectId) => {
  const url = `${ROOT_URL_BY_ID}${projectId}.json`;

    return(dispatch) => {
        axios.get(url).then(({data}) => {
            dispatch(setProject(data));
        });
    };
};

export const getProjects = () => {
    return (dispatch) => {
        axios.get(ROOT_URL).then(({data}) => {
            dispatch(setProjects(data.byId));
        });
    };
};
