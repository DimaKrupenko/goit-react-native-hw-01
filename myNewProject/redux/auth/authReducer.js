import { createSlice } from '@reduxjs/toolkit';

const nullState = {
  userId: null,
  login: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: nullState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => nullState,
  },
});
