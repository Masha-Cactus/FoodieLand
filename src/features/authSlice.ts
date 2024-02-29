import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  auth: boolean;
}

const initialState: AuthState = {
  auth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
