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
          type={children}
          placeholder={children}
          name={children}
          id={children}
          required
        />
        <label htmlFor="name">{children}</label>
      </div>
    </>
  );
};
