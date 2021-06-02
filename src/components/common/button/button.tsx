import React from 'react';
// import { Button } from './styles';

type InputProps = {
  /*any props*/
};
const Button: React.FC<InputProps> = ({ children }) => {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default { Button };
