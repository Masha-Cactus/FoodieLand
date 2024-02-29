/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  lastname: string;
  email: string;
  country: string;
  city: string;
  image: string;
}

// const initialState: UserState = {
//   name: '',
//   lastname: '',
//   email: '',
//   country: '',
//   city: '',
//   image: '',
// };

const initialState: UserState = {
  name: 'Kevin',
  lastname: 'Tutu',
  email: 'blabla@gmail.com',
  country: 'Italy',
  city: 'Rome',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
