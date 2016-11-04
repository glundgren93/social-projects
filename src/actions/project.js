import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

const ROOT_URL_BY_ID = 'https://social-projects-fbe1f.firebaseio.com/projects/byId/';

const setProject = (project) => ({
  type: actionTypes.GET_PROJECT,
  project
});

export const getProject = (projectId) => {
  const url = `${ROOT_URL_BY_ID}${projectId}.json`;

    return(dispatch) => {
        axios.get(url).then(({data}) => {
            dispatch(setProject(data));
        });
    };
};
