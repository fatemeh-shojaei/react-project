import React, { useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainContext from '../context/mainContext';
import Register from '../components/auth/register';
import Home from '../components/home';
import Login from '../components/auth/login';
type App = {
  match: object;
};

const App = ({ match }) => {
  useEffect(() => {}, []);

  const context = useContext(MainContext);
  const { user } = context;

  return (
    <Switch>
      <Route path={`${match.url}/`} component={Home} />
      <Route
        path={`${match.url}register`}
        component={() => {
          return user ? <Redirect to="/" /> : <Register />;
        }}
      />
      <Route path={`${match.url}login`} component={Login} />
    </Switch>
  );
};

export default App;
