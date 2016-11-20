import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityBasicInfo } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

import { FormInput, FormSelect } from './form_input';

class ActivityInfoPage extends Component {

  handleCustomSubmit(values) {
    this.props.setActivityBasicInfo(values);
    browserHistory.push('/venue');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Basic Activity Info</h1>
        <form onSubmit={handleSubmit(this.handleCustomSubmit.bind(this))}>
          <Field name="name" type="text" component={FormInput} label="Activity Name*" placeholder="e.g. Arts and Crafts" />
          <div className="row">
            <div className="small-6 columns">
              <Field name="min_age" component={FormSelect} label="Minimum Age*" />
            </div>
            <div className="small-6 columns">
              <Field name="max_age" component={FormSelect} label="Maximum Age*" />
            </div>
          </div>
          <button type="submit" className="button">Next</button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const { name, min_age, max_age } = values;
  var errors = {};
  if(!name) {
    errors.name = "Required";
  }
  if(!min_age) {
    errors.min_age = "Required";
  }
  if(!max_age) {
    errors.max_age = "Required";
  }
  if((min_age && max_age) && (min_age > max_age)) {
    errors.min_age = "Must be no more than max age"
    errors.max_age = "Must be at least the min age"
  }
  return errors;
}

ActivityInfoPage = connect(null, { setActivityBasicInfo })(ActivityInfoPage);

export default reduxForm({
  form: 'activity_basic_info',
  validate
})(ActivityInfoPage);
