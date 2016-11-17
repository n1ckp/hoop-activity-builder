import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ActivityInfoPage from './components/activity_info_page';
import VenueForm from './components/venue_form';
import ConfirmPage from './components/confirm_page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ActivityInfoPage} />
    <Route path="/venue" component={VenueForm} />
    <Route path="/confirm" component={ConfirmPage} />
  </Route>
);
