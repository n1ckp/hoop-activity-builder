import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

class Dummy extends Component {
  render() {
    return (
      <div>Dummy content.</div>
    );
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dummy} />
  </Route>
);
