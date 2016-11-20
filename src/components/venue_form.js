import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setActivityVenue } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

import { FormInput } from './form_input';

class VenueForm extends Component {
  handleCustomSubmit(values) {
    this.props.setActivityVenue(values);
    browserHistory.push('/confirm');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Activity Venue</h1>
        <form onSubmit={handleSubmit(this.handleCustomSubmit.bind(this))}>
          <Field name="building_unit" type="text" component={FormInput} label="Building Unit (Optional)" />
          <Field name="building_name" type="text" component={FormInput} label="Building Name (Optional)" />
          <Field name="street_number" type="text" component={FormInput} label="Street Number*" placeholder="e.g. 35" />
          <Field name="street_name" type="text" component={FormInput} label="Street Name*" placeholder="e.g. Dersingham Avenue" />
          <Field name="town" type="text" component={FormInput} label="Town*" placeholder="e.g. London" />
          <Field name="postcode" type="text" component={FormInput} label="Postcode*" placeholder="e.g. E12 5QF" />
          <Link to="/" className="button secondary">Back</Link>
          <button type="submit" className="button">Next</button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const { building_unit, building_name, street_number, street_name, town, postcode } = values;
  var errors = {};
  if(!street_number) {
    errors.street_number = "Required";
  }
  if(!street_name) {
    errors.street_name = "Required";
  }
  if(!town) {
    errors.town = "Required";
  }
  if(!postcode) {
    errors.postcode = "Required";
  }
  return errors;
}

VenueForm = connect(null, { setActivityVenue })(VenueForm);

export default reduxForm({
  form: 'activity_venue',
  validate
})(VenueForm);
