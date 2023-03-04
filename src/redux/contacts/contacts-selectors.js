export const getAllContacts = ({ contacts }) => contacts.items;
export const getIsLoading = ({ contacts }) => contacts.isLoading;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizingFilter = filter.toLowerCase().trim();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizingFilter);
  });

  return result;
};
