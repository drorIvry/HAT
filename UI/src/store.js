import {createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import {applyMiddleware} from 'redux';

export default createStore(reducers,{}, applyMiddleware(logger));
