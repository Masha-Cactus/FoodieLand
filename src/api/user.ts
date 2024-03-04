import { client } from './axiosClient';
import { UserType } from '../types/userType';
import { RegistrationType } from '../types/registrationType';

export const getUserInfo = (userId: number) => {
  return client.get<UserType>(`/users/${userId}`);
};

export const createUser = (data: RegistrationType) => {
  return client.post<RegistrationType>('/auth/register', data);
};

export const loginUser = (
  data: Omit<RegistrationType, 'name' | 'lastname'>,
) => {
  return client.post<RegistrationType>('/auth/login', data);
};

export const updateUser = ({
  name, lastname, email, userId,
}: UserType) => {
  return client.put<UserType>(`/users/${userId}`, {
    name, lastname, email, userId, // is UserId need to be here?
  });
};

export const deleteUser = (userId: number) => {
  return client.delete(`/users/${userId}`);
};
