import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

import mainContext from './mainContext';

class GlobalState extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.authenticateUser();
  }

  authenticateUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });
      const dateNow = Date.now() / 1000;
      // await  this.setState({ user: decodedToken.payload.user });
      if (decodedToken.payload.exp < dateNow) {
        localStorage.removeItem('token');
      } else {
        await this.setState({ user: decodedToken.payload });
        console.log(this.state.user);
      }
    }
  };

  render() {
    const { user } = this.state;
    return (
      <mainContext.Provider
        value={{
          user
        }}
      >
        {this.props.children}
      </mainContext.Provider>
    );
  }
}

export default GlobalState;
