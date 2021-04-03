import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
