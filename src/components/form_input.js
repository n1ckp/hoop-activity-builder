import React, { Component } from 'react';

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(value) {
    this.setState({value});
    this.props.handleUpdateState(value);
  }

  render() {
    return (
      <label>{this.props.label}
        <input type={this.props.type} value={this.state.value} onChange={event => {this.handleChange(event.target.value)}}></input>
      </label>
    );
  }
}
