import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home';
import Login from '../components/auth/login';
type AppType = {
  match: any;
};

const App: React.FC<AppType> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/`} component={Home} />
      <Route path={`${match.url}login`} component={Login} />
    </Switch>
  );
};

export default App;
