import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityName, setActivityMinAge, setActivityMaxAge } from '../actions/index';
import { Link } from 'react-router';

import SelectionBox from './selection_box';
import FormInput from './form_input';

class ActivityInfoPage extends Component {
  render() {
    return (
      <form>
        <FormInput type="text" label="Activity Name" handleUpdateState={setActivityName} />
        <SelectionBox label="Min Age" updateAge={setActivityMinAge} defaultAge="1" />
        <SelectionBox label="Max Age" updateAge={setActivityMaxAge} defaultAge="12" />
        <Link to='/venue' className="button">Next</Link>
      </form>
    );
  }
}

export default connect()(ActivityInfoPage);
