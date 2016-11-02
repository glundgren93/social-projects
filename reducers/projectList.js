import * as actionTypes from '../constants/actionTypes';

const initialState = {};

const setProjects = (state, action) => {
  const { projects } = action;
  return projects;
}

export const projectList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_LIST_SET:
      return setProjects(state, action);
    default:
      return state;
  }
}
