export const SET_ACTIVITY_NAME = 'SET_ACTIVITY_NAME';
export const SET_ACTIVITY_MIN_AGE = 'SET_ACTIVITY_MIN_AGE';
export const SET_ACTIVITY_MAX_AGE = 'SET_ACTIVITY_MAX_AGE';

export function setActivityName(name) {
  return {
    type: SET_ACTIVITY_NAME,
    payload: name
  };
}

export function setActivityMinAge(minAge) {
  return {
    type: SET_ACTIVITY_MIN_AGE,
    payload: minAge
  };
}

export function setActivityMaxAge(maxAge) {
  return {
    type: SET_ACTIVITY_MAX_AGE,
    payload: maxAge
  };
}
