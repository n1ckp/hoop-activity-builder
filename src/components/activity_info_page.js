import React, { Component } from 'react';
import SelectionBox from './selection_box';

export default class ActivityInfoPage extends Component {
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
    // TODO: set activity name on glabal state
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
        <a type="submit" className="button">Next</a>
      </form>
    );
  }
}
