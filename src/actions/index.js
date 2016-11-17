export const SET_ACTIVITY_NAME = 'SET_ACTIVITY_NAME';

export function setActivityName(name) {
  return {
    type: SET_ACTIVITY_NAME,
    payload: name
  };
}
