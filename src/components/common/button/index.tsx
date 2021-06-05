import React from 'react';
import { Button as StyledButton } from './styles';

type InputProps = {
  /*any props*/
};
export const Button: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <StyledButton kind={'primary'}>{children}</StyledButton>
    </>
  );
};
