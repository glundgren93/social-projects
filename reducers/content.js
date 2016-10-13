import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export const content = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTENT_SET:
      return setContent(state, action);
  }
  return state;
}

const setContent = (state, action) => {
  const { contents } = action;
  return [...state, ...contents];
}
