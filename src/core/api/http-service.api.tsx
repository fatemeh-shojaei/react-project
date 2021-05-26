import axios from 'axios';
import { getItem } from '../storage/storage';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const expectedError =
      error.response && error.response.state >= 400 && error.response.status < 500;
    if (!expectedError) {
      console.log(error.response.data.message[0]);
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use((config) => {
  config.headers['x-auth-token'] = getItem('token');
  return config;
});

export default axios;
