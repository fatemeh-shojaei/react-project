import React from 'react';
// import { Input } from './styles';

type InputProps = {
  /*any props*/
};
const Input: React.FC<InputProps> = (/*{ children }*/) => {
  return (
    <>
      <div className="form__group field">
        <Input
        // type="input"
        // className="form__field"
        // placeholder={children}
        // name="name"
        // id="name"
        // required
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </div>
    </>
  );
};

export default { Input };
