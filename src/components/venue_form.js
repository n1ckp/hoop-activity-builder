import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setActivityVenue } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

class VenueForm extends Component {
  handleCustomSubmit(values) {
    this.props.setActivityVenue(values);
    browserHistory.push('/confirm');
  }

  render() {
    const { handleSubmit, activity } = this.props;
    return (
      <div>
        <h1>Activity Venue</h1>
        <form onSubmit={handleSubmit(this.handleCustomSubmit.bind(this))}>
          <label>Building Unit (Optional)
            <Field name="building_unit" type="text" component="input" />
          </label>
          <label>Building Name (Optional)
            <Field name="building_name" type="text" component="input" />
          </label>
          <label>Street Number
            <Field name="street_number" type="text" component="input" />
          </label>
          <label>Street Name
            <Field name="street_name" type="text" component="input" />
          </label>
          <label>Town
            <Field name="town" type="text" component="input" />
          </label>
          <label>Postcode
            <Field name="postcode" type="text" component="input" />
          </label>
          <Link to="/" className="button secondary">Back</Link>
          <button type="submit" className="button">Next</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  };
}

VenueForm = connect(mapStateToProps, { setActivityVenue })(VenueForm);

export default reduxForm({
  form: 'activity_venue'
},
state => {
  initialValues: state.activity
})(VenueForm);
