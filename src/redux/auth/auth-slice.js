import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, refresh } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending](state) {
      state.isLoading = true;
      state.error = null;
      state.token = '';
    },
    [signup.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
    },
    [signup.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = null;
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.isLoading = initialState.isLoading;
      state.isLoggedIn = initialState.isLoggedIn;
      state.error = initialState.error;
      state.token = initialState.token;
      state.user.name = initialState.user.name;
      state.user.email = initialState.user.email;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
