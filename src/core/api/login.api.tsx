import http from './http-service.api';
import { setItem } from '../storage/storage';

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const LogInUser = async (value: string) => {
  try {
    const result = await http.post(MainUrl + '/auth/login', value);

    setItem('token', result.data.result.jwtToken);
    return result.data.result.jwtToken;
  } catch (error) {
    return false;
  }
};
