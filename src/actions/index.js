export const SET_ACTIVITY_NAME = 'SET_ACTIVITY_NAME';
export const SET_ACTIVITY_MIN_AGE = 'SET_ACTIVITY_MIN_AGE';
export const SET_ACTIVITY_MAX_AGE = 'SET_ACTIVITY_MAX_AGE';
export const SET_ACTIVITY_BUILDING_UNIT = 'SET_ACTIVITY_BUILDING_UNIT';
export const SET_ACTIVITY_BUILDING_NAME = 'SET_ACTIVITY_BUILDING_NAME';
export const SET_ACTIVITY_STREET_NUMBER = 'SET_ACTIVITY_STREET_NUMBER';
export const SET_ACTIVITY_STREET_NAME = 'SET_ACTIVITY_STREET_NAME';
export const SET_ACTIVITY_TOWN = 'SET_ACTIVITY_TOWN';
export const SET_ACTIVITY_POSTCODE = 'SET_ACTIVITY_POSTCODE';

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

export function setActivityBuildingUnit(buildingUnit) {
  return {
    type: SET_ACTIVITY_BUILDING_UNIT,
    payload: buildingUnit
  };
}

export function setActivityBuildingName(buildingName) {
  return {
    type: SET_ACTIVITY_BUILDING_NAME,
    payload: buildingName
  };
}

export function setActivityStreetNumber(streetNumber) {
  return {
    type: SET_ACTIVITY_STREET_NUMBER,
    payload: streetNumber
  };
}

export function setActivityStreetName(streetName) {
  return {
    type: SET_ACTIVITY_STREET_NAME,
    payload: streetName
  };
}

export function setActivityTown(town) {
  return {
    type: SET_ACTIVITY_TOWN,
    payload: town
  };
}
