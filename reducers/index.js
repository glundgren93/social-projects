import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { projectList, project } from './project';

export default combineReducers({
  projectList,
  project,
  routing: routerReducer
});
