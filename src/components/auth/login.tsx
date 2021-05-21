import { useState } from 'react';

interface Value {
  username: string;
  password: string;
}
const Login: React.FC = () => {
  const [value, setValue] = useState<Value>({
    username: '',
    password: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // console.log('submitted');
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
        <button className="btn btn-primary btn-lg btn-block">Login</button>
      </form>
    </>
  );
};

export default Login;
