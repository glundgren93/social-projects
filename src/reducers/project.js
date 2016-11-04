import * as actionTypes from '../constants/actionTypes';

const initialState = {};

const setProject = (state, action) => {
  const { project } = action;
  return project;
}

export const project = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECT:
      return setProject(state, action);
    default:
      return state;
  }
}
