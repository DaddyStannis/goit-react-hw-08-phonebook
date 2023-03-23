import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestSignup,
  requestLogin,
  requestLogout,
  requestRefresh,
} from 'shared/api/auth-api';

const signup = createAsyncThunk(
  'auth/signup',

  async (args, thunkAPI) => {
    try {
      return await requestSignup(args);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',

  async (args, thunkAPI) => {
    try {
      return await requestLogin(args);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',

  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await requestLogout(token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const refresh = createAsyncThunk(
  'auth/refresh',

  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue('Cannot fetch user');
      }

      return requestRefresh(token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { signup, login, logout, refresh };
