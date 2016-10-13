import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
