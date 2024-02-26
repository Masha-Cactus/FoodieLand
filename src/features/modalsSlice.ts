/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type Modals = {
  shouldSignInBeShow: boolean,
  shouldSignUpBeShow: boolean,
};

const initialState: Modals = {
  shouldSignInBeShow: false,
  shouldSignUpBeShow: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openSignIn: (state) => {
      state.shouldSignInBeShow = true;
    },
    hideSignIn: (state) => {
      state.shouldSignInBeShow = false;
    },
    openSignUp: (state) => {
      state.shouldSignUpBeShow = true;
    },
    hideSignUp: (state) => {
      state.shouldSignUpBeShow = false;
    },
  },
});

export default modalsSlice.reducer;
export const {
  openSignIn,
  hideSignIn,
  openSignUp,
  hideSignUp,
} = modalsSlice.actions;
