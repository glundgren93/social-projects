import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { project } from './project';
import { projectList } from './projectList';

export default combineReducers({
  projectList,
  project,
  routing: routerReducer
});
