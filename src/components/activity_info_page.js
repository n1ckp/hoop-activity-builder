import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityBasicInfo } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

class ActivityInfoPage extends Component {
  selectBoxOptions() {
    var options = [<option key="0"></option>];
    for (var i=1; i<=12; i++) {
      options.push(
        <option key={i} value={i}>{(i === 1) ? `${i} Year` : `${i} Years`}</option>
      );
    }
    return options;
  }

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
          <label>Activity Name
            <Field name="name" type="text" component="input" />
          </label>

          <div className="row">
            <div className="small-6 columns">
              <label>Minimum Age
                <Field name="min_age" component="select">
                  { this.selectBoxOptions() }
                </Field>
              </label>
            </div>
            <div className="small-6 columns">
              <label>Maximum Age
                <Field name="max_age" component="select">
                  { this.selectBoxOptions() }
                </Field>
              </label>
            </div>
          </div>
          <button type="submit" className="button">Next</button>
        </form>
      </div>
    );
  }
}

ActivityInfoPage = connect(null, { setActivityBasicInfo })(ActivityInfoPage);

export default reduxForm({
  form: 'activity_basic_info'
})(ActivityInfoPage);
