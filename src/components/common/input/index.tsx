import React from 'react';
import { Input as StyledInput } from './styles';

type InputProps = {
  /*any props*/
};
export const Input: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <div>
        <StyledInput
          type="input"
          placeholder="نام خود را وارد کنید"
          name="name"
          id="name"
          required
        />
        <label htmlFor="name">{children}</label>
      </div>
    </>
  );
};
