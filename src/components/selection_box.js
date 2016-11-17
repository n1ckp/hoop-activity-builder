import React, { Component } from 'react';

export default class SelectionBox extends Component {
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
    // TODO: set max/min age on global state (use this.props.infoType and value)
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
