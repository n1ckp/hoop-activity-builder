import { combineReducers } from 'redux';
import ActivityReducer from './reducer_activity';

const rootReducer = combineReducers({
  activity: ActivityReducer
});

export default rootReducer;
