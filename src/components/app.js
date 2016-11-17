import React, { Component } from 'react';
require('../style/app.scss');

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="medium-6 columns">
          {this.props.children}
        </div>
      </div>
    );
  }
}
