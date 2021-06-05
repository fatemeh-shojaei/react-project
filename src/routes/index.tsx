import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home';

type AppType = {
  match: any;
};

const App: React.FC<AppType> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/`} component={Home} />
    </Switch>
  );
};

export default App;
