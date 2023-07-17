import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Learn', tel: '390553750' },
  { id: 1, name: 'Get', tel: '390553750' },
  { id: 2, name: 'Master', tel: '8508385' },
  { id: 3, name: 'Discover', tel: '8508385' },
  { id: 4, name: 'Buildapps', tel: '8508385' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addcontact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deletecontact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addcontact, deletecontact, toggleCompleted } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
