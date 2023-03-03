import * as api from '../../services/contacts';

import * as actions from './contacts-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getAllContacts();
      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

const isDublicate = (contacts, { name }) => {
  const normalizingName = name.toLowerCase();
  const result = contacts.find(({ name }) => {
    return name.toLowerCase() === normalizingName;
  });
  return Boolean(result);
};

export const addContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alert(`${data.name} is already in contacts.`);
        return false;
      }
      dispatch(actions.fetchAddContactLoading());
      const result = await api.postContact(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());
      await api.deleteByIdContact(id);
      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
