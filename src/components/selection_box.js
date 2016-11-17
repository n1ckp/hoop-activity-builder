import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityMinAge, setActivityMaxAge } from '../actions/index';

class SelectionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultAge
    };
  }

  renderOptions() {
    var options = [];
    for (var i=1; i<=12; i++) {
      options.push(
        <option key={i} value={i}>{(i === 1) ? `${i} Year` : `${i} Years`}</option>
      );
    }
    return options;
  }

  handleSelectChange(value) {
    this.setState({value});
    (this.props.infoType === "minAge") ? this.props.setActivityMinAge(value) : this.props.setActivityMaxAge(value);
  }

  render() {
    return (
      <label>{this.props.label}
        <select value={this.state.value} onChange={event => {this.handleSelectChange(event.target.value)}}>
          { this.renderOptions() }
        </select>
      </label>
    );
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps, { setActivityMinAge, setActivityMaxAge })(SelectionBox);
