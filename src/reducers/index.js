import { combineReducers } from 'redux';
import ActivityReducer from './reducer_activity';
import { RESET_ACTIVITY } from '../actions/index';

const appReducer = combineReducers({
  activity: ActivityReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_ACTIVITY) {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;
