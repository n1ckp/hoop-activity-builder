import { SET_ACTIVITY_NAME, SET_ACTIVITY_MIN_AGE, SET_ACTIVITY_MAX_AGE } from '../actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_ACTIVITY_NAME:
      return { ...state, name: action.payload };
    case SET_ACTIVITY_MIN_AGE:
      return { ...state, minAge: action.payload };
    case SET_ACTIVITY_MAX_AGE:
      return { ...state, maxAge: action.payload };
    default:
      return state;
  }
}
