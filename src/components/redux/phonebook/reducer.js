// import { combineReducers } from 'redux';

// const contactsInitialState = [
// { id: 0, name: 'Learn', tel: '390553750' },
// { id: 1, name: 'Get', tel: '390553750' },
// { id: 2, name: 'Master', tel: '8508385' },
// { id: 3, name: 'Discover', tel: '8508385' },
// { id: 4, name: 'Buildapps', tel: '8508385' },
// ];

// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addcontact':
//       return [...state, action.payload];
//     case 'contacts/deletecontact':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const filtersInitialState = '';

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

////////////////

// import { statusFilters } from './constants';

// const contactsInitialState = [
//   { id: 0, name: 'Learn', tel: '390553750' },
//   { id: 1, name: 'Get', tel: '390553750' },
//   { id: 2, name: 'Master', tel: '8508385' },
//   { id: 3, name: 'Discover', tel: '8508385' },
//   { id: 4, name: 'Buildapps', tel: '8508385' },
// ];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addcontact':
//       return [...state, action.payload];
//     case 'contacts/deletecontact':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const filtersInitialState = '';

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

/////////////

import { createReducer } from '@reduxjs/toolkit';
import { addcontact, deletecontact, setStatusFilter } from './actions';

const contactsInitialState = [
  { id: 0, name: 'Learn', tel: '390553750' },
  { id: 1, name: 'Get', tel: '390553750' },
  { id: 2, name: 'Master', tel: '8508385' },
  { id: 3, name: 'Discover', tel: '8508385' },
  { id: 4, name: 'Buildapps', tel: '8508385' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addcontact]: (state, action) => {
    console.log(action);
    state.push(action.payload);
  },
  [deletecontact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
