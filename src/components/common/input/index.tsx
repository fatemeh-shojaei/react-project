import React from 'react';
import { Input as StyledInput } from './styles';

type InputProps = {
  /*any props*/
};
const Input: React.FC<InputProps> = (
  // eslint-disable-next-line no-empty-pattern
  {
    /*children*/
  }
) => {
  return (
    <>
      <div className="form__group field">
        <StyledInput
        // type="text"
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
