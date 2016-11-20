import rootReducer from '../../src/reducers/index';
import { SET_ACTIVITY_BASIC_INFO, RESET_ACTIVITY } from '../../src/actions';

describe("IndexReducer", function() {
  it("resets activity state if action type is RESET_ACTIVITY", function() {
    const state = { activity: {name: "my activity"} };
    const action = { type: RESET_ACTIVITY };
    const expectedState = {
      activity: {},
      form: {}
    };
    expect(rootReducer(state,action)).to.eql(expectedState);
  });

  it("handles SET_ACTIVITY_BASIC_INFO", function() {
    const initialState = { activity: {} };
    const action = { type: SET_ACTIVITY_BASIC_INFO, payload: { name: "My New Activity" } };
    const expectedState = {
      activity: { name: "My New Activity" },
      form: {}
    };
    expect(rootReducer(initialState,action)).to.eql(expectedState);
  });
});
