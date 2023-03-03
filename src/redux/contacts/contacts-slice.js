import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contacts-actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.isLoading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchAddContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchAddContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [fetchDeleteContactLoading]: store => {
      store.isLoading = true;
    },
    [fetchDeleteContactSuccess]: (store, { payload }) => {
      store.isLoading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [fetchDeleteContactError]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
