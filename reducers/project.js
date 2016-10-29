import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export const projectList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_LIST_SET:
      return setProjects(state, action);
    default:
      return state;
  }
}

export const project = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECT:
      return setProject(state, action);
    default:
      return state;
  }
}

const setProjects = (state, action) => {
  const { projects } = action;
  return projects;
}

const setProject = (state, action) => {
  const { project } = action;
  return project;
}
