import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import summeryReducer from './SummeryReducer';
import pledgeReducer from './PledgeReducer';
import bucketNavigationReducer from './bucketNavigationReducer';


export default combineReducers({login:loginReducer, summery:summeryReducer, pledge:pledgeReducer, bucketNavigation:bucketNavigationReducer});