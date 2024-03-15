/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../types/userType';

export interface AuthState {
  isAuthenticated: boolean;
  user: null | UserType;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
