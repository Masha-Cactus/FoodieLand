import { client } from './axiosClient';
import { UserType } from '../types/userType';

export const getUserInfo = (userId: number) => {
  return client.get<UserType>(`/users/${userId}`);
};

export const createUser = (data: Omit<UserType, 'userId'>) => {
  return client.post<UserType>('/auth/register', data);
};

export const loginUser = (data: Omit<UserType, 'userId'>) => {
  return client.post<UserType>('/auth/login', data);
};

export const updateUser = ({
  userName, email, pwd, userId,
}: UserType) => {
  return client.put<UserType>(`/users/${userId}`, {
    userName, email, pwd, userId, // is UserId need to be here?
  });
};

export const deleteUser = (userId: number) => {
  return client.delete(`/users/${userId}`);
};
