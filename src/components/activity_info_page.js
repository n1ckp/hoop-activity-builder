import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityName, setActivityMinAge, setActivityMaxAge } from '../actions/index';
import { Link } from 'react-router';

import SelectionBox from './selection_box';
import FormInput from './form_input';

class ActivityInfoPage extends Component {
  render() {
    return (
      <div>
        <h1>Basic Activity Info</h1>
        <form>
          <FormInput type="text" label="Activity Name" handleUpdateState={setActivityName} value={this.props.activity.name} />
          <div className="row">
            <div className="small-6 columns">
              <SelectionBox label="Min Age" updateAge={setActivityMinAge} defaultAge="1" value={this.props.activity.min_age} />
            </div>
            <div className="small-6 columns">
              <SelectionBox label="Max Age" updateAge={setActivityMaxAge} defaultAge="12" value={this.props.activity.max_age} />
            </div>
          </div>
          <Link to='/venue' className="button">Next</Link>
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

export default connect(mapStateToProps)(ActivityInfoPage);
