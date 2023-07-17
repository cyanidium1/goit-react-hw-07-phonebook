import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebook/contactsSlice';
import { filtersReducer } from './phonebook/filtersSlice';

const contactReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

export const rootReducer = combineReducers({
  contacts: contactReducer,
});
