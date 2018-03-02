import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import summeryReducer from './SummeryReducer';
import pledgeReducer from './PledgeReducer';
import bucketReducer from './bucketReducer';
import AppReducer from './AppReducer'


export default combineReducers({login:loginReducer, summery:summeryReducer, pledge:pledgeReducer, bucket:bucketReducer, app:AppReducer});