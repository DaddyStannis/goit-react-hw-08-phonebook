import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestContacts,
  deleteContact,
  createContact,
} from 'shared/api/contacts-api';
// import { addToStorage, removeFromStorage } from './contacts-slice';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await requestContacts(token);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const removeContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const data = await deleteContact(id, token);
      return data;
      // if (data.id === id) {
      //   thunkAPI.dispatch(removeFromStorage({ id }));
      // }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',

  async ({ name, number }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const data = await createContact(name, number, token);
      return data;
      // thunkAPI.dispatch(addToStorage(data));
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchContacts, removeContact, addContact };
