import React from 'react';
import { Label as StyledLabel } from './styles';

type InputProps = {
  /*any props*/
};
export const Label: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <StyledLabel htmlFor="name">{children}</StyledLabel>
    </>
  );
};
