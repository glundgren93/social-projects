import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

export const ROOT_URL = 'https://social-projects-fbe1f.firebaseio.com/projects.json';

const setProjects = (projects) => ({
  type: actionTypes.PROJECT_LIST_SET,
  projects
});

export const getProjects = () => {
    return (dispatch) => {
        axios.get(ROOT_URL).then(({data}) => {
            dispatch(setProjects(data.byId));
        });
    };
};
