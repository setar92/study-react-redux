import axios from 'axios';

import { User } from '../common/types';

const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>('users.json');
  const users = response.data;
  return users;
};

export { getUsers };
