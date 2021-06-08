import * as React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from './../../components/common/input/styles';
import { ButtonStyle } from '../../components/common/button/styles';
import { Col, Form } from 'react-bootstrap';
import { useState } from 'react';

interface MyFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [initialValues, setInitialValues] = useState<MyFormValues>({
    email: '',
    password: ''
  });

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('ایمیل نادرست است').required(),
    password: Yup.string().min(5).required()
  });

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault();
  //   // console.log('submitted');
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInitialValues({
      ...initialValues,
      [event.target.name]: event.target.value
    });
  };

  const LogInUser = async (initialValues: any) => {
    const LoginData: any = await LogInUser(initialValues);
    console.log({ LoginData: LoginData });
    if (LoginData) {
      setInitialValues(LoginData);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={LogInUser} validationSchema={ValidationSchema}>
      {(errors: MyFormValues, touched: MyFormValues) => {
        return (
          <Form>
            <Form.Group as={Col} md="4">
              <Input
                type="email"
                name="email"
                id="email"
                onchange={handleChange}
                placeholder="ایمیل خود را وارد کنید"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <ErrorMessage name="email" />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="پسورد خود را وارد کنید"
              />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <ErrorMessage name="password" />
            </Form.Group>

            <ButtonStyle type="submit" primary>
              ورود
            </ButtonStyle>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
