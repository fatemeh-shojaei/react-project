import React from 'react';
import { Button as StyledButton } from './styles';

type InputProps = {
  /*any props*/
};
const Button: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <StyledButton kind={'primary'}>{children}</StyledButton>
    </>
  );
};

export default { Button };
