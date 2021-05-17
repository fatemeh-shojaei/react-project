import React, {useContext, useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import MainContext from '../context/mainContext';
import Register from '../components/auth/register';
import Home from '../components/home';
type App = {
  match: object;
};

const App = ({match}) => {
  useEffect(() => {}, []);

  const context = useContext(MainContext);
  const {user} = context;

  return (
    <Switch>
      <Route path={`${match.url}/`} component={Home} />
      <Route
        path={`${match.url}register`}
        component={() => {
          return user ? <Redirect to="/" /> : <Register />;
        }}
      />
    </Switch>
  );
};

export default App;
