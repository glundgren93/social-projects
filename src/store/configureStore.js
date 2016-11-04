import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import localStorageLoad from '../middleware/localStorageLoad';
import localStorageDump from '../middleware/localStorageDump';

const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(localStorageLoad, ReduxPromise, thunk, router, localStorageDump)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
