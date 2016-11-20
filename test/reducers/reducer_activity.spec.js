import activityReducer from '../../src/reducers/reducer_activity';
import {
  SET_ACTIVITY_BASIC_INFO, SET_ACTIVITY_VENUE
} from '../../src/actions';

describe("ActivityReducer", function() {
  it("handles action with unknown type", function() {
    expect(activityReducer({},{})).to.eql({});
  });

  it("handles action of type SET_ACTIVITY_BASIC_INFO", function() {
    const action = {
      type: SET_ACTIVITY_BASIC_INFO,
      payload: {name: "my activity", min_age: "4", max_age: "5"}
    };
    expect(activityReducer({},action)).to.eql({name: "my activity", min_age: "4", max_age: "5"});
  });

  it("handles action of type SET_ACTIVITY_VENUE", function() {
    const action = {
      type: SET_ACTIVITY_VENUE,
      payload: {foo: "bar"}
    };
    expect(activityReducer({},action)).to.eql({foo: "bar"});
  });
});
