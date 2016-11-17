import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  setActivityBuildingUnit, setActivityBuildingName, setActivityStreetNumber,
  setActivityStreetName, setActivityTown, setActivityPostcode
} from '../actions/index';

import FormInput from './form_input';

class VenueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      building_unit: "",
      building_name: "",
      street_number: "",
      street_name: "",
      town: "",
      postcode: "",
    };
  }

  render() {
    return (
      <form>
        <FormInput type="text" label="Building Unit (Optional)" handleUpdateState={setActivityBuildingUnit} />
        <FormInput type="text" label="Building Name (Optional)" handleUpdateState={setActivityBuildingName} />
        <FormInput type="text" label="Street Number" handleUpdateState={setActivityStreetNumber} />
        <FormInput type="text" label="Street Name" handleUpdateState={setActivityStreetName} />
        <FormInput type="text" label="Town" handleUpdateState={setActivityTown} />
        <FormInput type="text" label="Postcode" handleUpdateState={setActivityPostcode} />
        <Link to="/confirm" className="button">Next</Link>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps, {
  setActivityBuildingUnit, setActivityBuildingName, setActivityStreetNumber,
  setActivityStreetName, setActivityTown, setActivityPostcode
})(VenueForm);
