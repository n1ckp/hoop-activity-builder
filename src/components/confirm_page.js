import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { resetActivity } from '../actions/index';

class ConfirmField extends Component {
  render() {
    return (
      <div className="row">
        <div className="small-6 columns confirm-left">{this.props.name}:</div>
        <div className="small-6 columns">{this.props.value}</div>
      </div>
    );
  }
}

class ConfirmPage extends Component {
  handleConfirm() {
    this.props.resetActivity();
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <h1>Confirmation</h1>
        <ConfirmField name="Activity Name" value={this.props.activity.name} />
        <ConfirmField name="Minimum Age" value={this.props.activity.min_age} />
        <ConfirmField name="Maximum Age" value={this.props.activity.max_age} />
        <ConfirmField name="Building Unit (Optional)" value={this.props.activity.building_unit} />
        <ConfirmField name="Building Name (Optional)" value={this.props.activity.building_name} />
        <ConfirmField name="Street Number" value={this.props.activity.street_number} />
        <ConfirmField name="Street Name" value={this.props.activity.street_name} />
        <ConfirmField name="Town" value={this.props.activity.town} />
        <ConfirmField name="Postcode" value={this.props.activity.postcode} />
        <Link to="/venue" className="button secondary">Back</Link>
        <a className="button" onClick={event => {this.handleConfirm()}}>Confirm</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps, { resetActivity })(ConfirmPage);
