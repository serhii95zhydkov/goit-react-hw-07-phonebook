import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6401af333779a862625b5408.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const postContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteByIdContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
