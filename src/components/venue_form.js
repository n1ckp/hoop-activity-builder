import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  setActivityBuildingUnit, setActivityBuildingName, setActivityStreetNumber,
  setActivityStreetName, setActivityTown, setActivityPostcode
} from '../actions/index';

import FormInput from './form_input';

class VenueForm extends Component {
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

export default connect()(VenueForm);
