import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './containers/pages/Logon';
import Register from './containers/pages/Register';
import Profile from './containers/pages/Profile';
import NewIncident from './containers/pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
