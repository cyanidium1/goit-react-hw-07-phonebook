import { nanoid } from 'nanoid';

export const addcontact = (name, tel) => {
  return {
    type: 'contacts/addcontact',
    payload: {
      id: nanoid(),
      name,
      tel,
    },
  };
};
export const deletecontact = contactId => {
  return {
    type: 'contacts/deletecontact',
    payload: contactId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
