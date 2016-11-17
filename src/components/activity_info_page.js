import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityName } from '../actions/index';
import { Link } from 'react-router';

import SelectionBox from './selection_box';

class ActivityInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      minAge: "",
      maxAge: ""
    };
  }

  handleNameChange(name) {
    this.setState({name});
    this.props.setActivityName(name);
  }

  render() {
    return (
      <form>
        <label>Activity Name
          <input
            type="text"
            placeholder="Enter an activity name"
            value={this.state.name}
            onChange={event => {this.handleNameChange(event.target.value)}}>
          </input>
        </label>
        <SelectionBox label="Min Age" infoType="minAge" defaultAge="1" />
        <SelectionBox label="Max Age" infoType="maxAge" defaultAge="12" />
        <Link to='/venue' className="button">Next</Link>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps, { setActivityName })(ActivityInfoPage);
