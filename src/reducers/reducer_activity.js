import {
  SET_ACTIVITY_NAME, SET_ACTIVITY_MIN_AGE, SET_ACTIVITY_MAX_AGE,
  SET_ACTIVITY_BUILDING_UNIT, SET_ACTIVITY_BUILDING_NAME, SET_ACTIVITY_STREET_NUMBER,
  SET_ACTIVITY_STREET_NAME, SET_ACTIVITY_TOWN, SET_ACTIVITY_POSTCODE
} from '../actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_ACTIVITY_NAME:
      return { ...state, name: action.payload };
    case SET_ACTIVITY_MIN_AGE:
      return { ...state, min_age: action.payload };
    case SET_ACTIVITY_MAX_AGE:
      return { ...state, max_age: action.payload };
    case SET_ACTIVITY_BUILDING_UNIT:
    debugger;
      return { ...state, building_unit: action.payload };
    case SET_ACTIVITY_BUILDING_NAME:
      return { ...state, building_name: action.payload };
    case SET_ACTIVITY_STREET_NUMBER:
      return { ...state, street_number: action.payload };
    case SET_ACTIVITY_STREET_NAME:
      return { ...state, street_name: action.payload };
    case SET_ACTIVITY_TOWN:
      return { ...state, town: action.payload };
    case SET_ACTIVITY_POSTCODE:
      return { ...state, postcode: action.payload };
    default:
      return state;
  }
}
