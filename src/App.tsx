import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MyRoute from './routes/index';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MyRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
