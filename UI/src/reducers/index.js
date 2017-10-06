import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import summeryReducer from './SummeryReducer';
import pledgeReducer from './PledgeReducer';


export default combineReducers({login:loginReducer, summery:summeryReducer, pledge:pledgeReducer});