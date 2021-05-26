import { useState } from 'react';
import { LogInUser } from '../../core/api/login.api';

interface Value {
  username: string;
  password: string;
}
interface Success {
  success: boolean;
}
const Login: React.FC = () => {
  const [value, setValue] = useState<Value>({
    username: '',
    password: ''
  });
  const [success, isSuccess] = useState<Success>({
    success: false
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // console.log('submitted');
  };

  const LogInUser: React.MouseEventHandler<HTMLButtonElement> = async () => {
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
      <h1>login</h1>
      <form style={{ marginRight: '20%', marginLeft: '20%' }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">userName</label>
          <input
            className="form-control"
            id="username"
            type="text"
            onChange={handleChange}
            value={value.username}
            name="username"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            className="form-control"
            id="password"
            type="password"
            onChange={handleChange}
            value={value.password}
            name="password"
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block" onClick={LogInUser}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
