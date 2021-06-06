import React from 'react';
import { Input } from './common/input';
import { Button } from './common/button';
import { Label } from './common/typography/label/styles';

const Home: React.FC = () => {
  return (
    <>
      <h1>home</h1>
      <Label>نام</Label>
      <Input></Input>
      <Button>ورود</Button>
    </>
  );
};
export default Home;
