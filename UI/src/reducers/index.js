import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import summeryReducer from './SummeryReducer';


export default combineReducers({login:loginReducer, summery:summeryReducer});