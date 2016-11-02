import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import localStorageLoad from '../middleware/localStorageLoad';
import localStorageDump from '../middleware/localStorageDump';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(localStorageLoad, ReduxPromise, thunk, router, localStorageDump, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
