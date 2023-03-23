import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const newContact = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      state.items.push(newContact);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addToStorage, removeFromStorage } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
