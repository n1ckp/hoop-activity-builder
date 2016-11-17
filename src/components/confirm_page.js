import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ConfirmField extends Component {
  render() {
    return (
      <div className="row">
        <div className="small-6 columns">{this.props.name}:</div>
        <div className="small-6 columns">{this.props.value}</div>
      </div>
    );
  }
}

class ConfirmPage extends Component {
  render() {
    return (
      <div>
        <ConfirmField name="Activity Name" value={this.props.activity.name} />
        <ConfirmField name="Minimum Age" value={this.props.activity.min_age} />
        <ConfirmField name="Maximum Age" value={this.props.activity.max_age} />
        <ConfirmField name="Building Unit (Optional)" value={this.props.activity.building_unit} />
        <ConfirmField name="Building Name (Optional)" value={this.props.activity.building_name} />
        <ConfirmField name="Street Number" value={this.props.activity.street_number} />
        <ConfirmField name="Street Name" value={this.props.activity.street_name} />
        <ConfirmField name="Town" value={this.props.activity.town} />
        <ConfirmField name="Postcode" value={this.props.activity.postcode} />
        <Link to="/" className="button">Confirm</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps)(ConfirmPage);
