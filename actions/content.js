import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

export const ROOT_URL = 'https://social-projects-fbe1f.firebaseio.com/projects.json';

const setContent = (contents) => ({
    type: actionTypes.CONTENT_SET,
    contents
});

export const getContent = () => {
  return (dispatch) => {
    axios.get(ROOT_URL).then(({data}) => {
      dispatch(setContent(data));
    });
  };
};
