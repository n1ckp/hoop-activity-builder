import { SET_ACTIVITY_NAME } from '../actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_ACTIVITY_NAME:
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
}
