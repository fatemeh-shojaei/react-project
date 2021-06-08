import http from './http-service.api';
import { setItem } from '../storage/storage';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const LogInUser = async (initialValues: any) => {
  try {
    const result = await http.post(MainUrl + '/auth/login', initialValues);

    setItem('token', result.data.result.jwtToken);
    console.log(result);
    return result.data.result.jwtToken;
  } catch (error) {
    return false;
  }
};
