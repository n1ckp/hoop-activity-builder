import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivityMinAge, setActivityMaxAge } from '../actions/index';

class SelectionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : this.props.defaultAge
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
    this.props.dispatch(this.props.updateAge(value));
  }

  componentDidMount() {
    this.props.dispatch(this.props.updateAge(this.props.defaultAge));
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

export default connect()(SelectionBox);
