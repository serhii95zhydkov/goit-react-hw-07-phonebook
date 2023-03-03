import { useSelector } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import ContactItem from 'components/ContactItem/ContactItem';

import { StyledContactList } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <StyledContactList>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact}></ContactItem>;
      })}
    </StyledContactList>
  );
};

export default ContactList;
