import React, { Component } from 'react';
require('../style/app.scss');

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
}
