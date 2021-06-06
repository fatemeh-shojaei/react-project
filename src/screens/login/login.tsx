import * as React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from './../../components/common/input/styles';

interface MyFormValues {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const initialValues: MyFormValues = { email: '', password: '' };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('ایمیل نادرست است').required(),
    password: Yup.string().min(5).required()
  });

  const onSubmit = (values: MyFormValues): void => {
    console.log('form data', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ValidationSchema}>
      {(errors: MyFormValues, touched: MyFormValues) => {
        return (
          <Form>
            <Input type="email" name="email" id="email" placeholder="ایمیل خود را وارد کنید" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <ErrorMessage name="email" />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="پسورد خود را وارد کنید"
            />
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
