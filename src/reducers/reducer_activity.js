import { SET_ACTIVITY_BASIC_INFO, SET_ACTIVITY_VENUE } from '../actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_ACTIVITY_BASIC_INFO:
      return { ...state, ...action.payload };
    case SET_ACTIVITY_VENUE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
