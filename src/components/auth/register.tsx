import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {REgisterStateType} from '../../models/auth';

const Register: React.FC = () => {
  const history = useHistory();
  const [state, setSatte] = useState<REgisterStateType>(null);

  const handleSubmit = (event: React.FormEvent): void => {
    try {
      event.preventDefault();

      console.log(state);
      history.replace('/login');
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (event): void => {
    setSatte({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form style={{padding: '10%'}} onSubmit={handleSubmit}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>userName</label>
        <input
          type="string"
          className="form-control"
          name="userName"
          placeholder="Enter userName"
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Register;
