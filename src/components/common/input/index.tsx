import React from 'react';
import { Input as StyledInput } from './styles';

type InputProps = {
  /*any props*/
};
export const Input: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <div className="form__group field">
        <StyledInput
          type="text"
          className="form__field"
          placeholder="Enter name"
          name="name"
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">
          {children}
        </label>
      </div>
    </>
  );
};
