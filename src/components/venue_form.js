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
      <div>
        <h1>Activity Venue</h1>
        <form>
          <FormInput type="text" label="Building Unit (Optional)" handleUpdateState={setActivityBuildingUnit} value={this.props.activity.building_unit} />
          <FormInput type="text" label="Building Name (Optional)" handleUpdateState={setActivityBuildingName} value={this.props.activity.building_name} />
          <FormInput type="text" label="Street Number" handleUpdateState={setActivityStreetNumber} value={this.props.activity.street_number} />
          <FormInput type="text" label="Street Name" handleUpdateState={setActivityStreetName} value={this.props.activity.street_name} />
          <FormInput type="text" label="Town" handleUpdateState={setActivityTown} value={this.props.activity.town} />
          <FormInput type="text" label="Postcode" handleUpdateState={setActivityPostcode} value={this.props.activity.postcode} />
          <Link to="/" className="button secondary">Back</Link>
          <Link to="/confirm" className="button">Next</Link>
        </form>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps)(VenueForm);
