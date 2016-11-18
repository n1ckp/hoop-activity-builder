import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ActivityReducer from './reducer_activity';
import { RESET_ACTIVITY } from '../actions/index';

const appReducer = combineReducers({
  activity: ActivityReducer,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_ACTIVITY) {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;
