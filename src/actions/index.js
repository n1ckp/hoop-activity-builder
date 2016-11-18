export const RESET_ACTIVITY = 'RESET_ACTIVITY';
export const SET_ACTIVITY_BASIC_INFO = 'SET_ACTIVITY_BASIC_INFO';
export const SET_ACTIVITY_VENUE = 'SET_ACTIVITY_VENUE';

export function resetActivity() {
  return {
    type: RESET_ACTIVITY
  }
}

export function setActivityBasicInfo(props) {
  return {
    type: SET_ACTIVITY_BASIC_INFO,
    payload: props
  }
}

export function setActivityVenue(props) {
  return {
    type: SET_ACTIVITY_VENUE,
    payload: props
  }
}
