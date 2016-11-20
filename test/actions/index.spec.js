import {
  SET_ACTIVITY_BASIC_INFO, SET_ACTIVITY_VENUE, RESET_ACTIVITY,
  setActivityBasicInfo, setActivityVenue, resetActivity
} from '../../src/actions';

describe("Actions", function() {
  describe("setActivityBasicInfo", function() {
    it('has the correct type', function() {
      expect(setActivityBasicInfo({}).type).to.equal(SET_ACTIVITY_BASIC_INFO);
    });

    it('has the correct payload', function() {
      const props = { foo: "bar" };
      expect(setActivityBasicInfo(props).payload).to.equal(props);
    });
  });

  describe("setActivityVenue", function() {
    it('has the correct type', function() {
      expect(setActivityVenue({}).type).to.equal(SET_ACTIVITY_VENUE);
    });

    it('has the correct payload', function() {
      const props = { foo: "bar" };
      expect(setActivityBasicInfo(props).payload).to.equal(props);
    });
  });

  describe("resetActivity", function() {
    it('has the correct type', function() {
      expect(resetActivity().type).to.equal(RESET_ACTIVITY);
    });
  });
});
