import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export const project = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_SET:
      return setProject(state, action);
    default:
      return state;
  }
}

const setProject = (state, action) => {
  const { projects } = action;
  return projects;
}
