import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from '../containers/SignIn';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/" exact component={SignUp} /> */}
    </BrowserRouter>
  );
}

export default Routes;
