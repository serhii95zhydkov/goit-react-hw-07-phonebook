import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

import {
  StyledItemContacts,
  StyledTextContacts,
  StyledButtonContacts,
} from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <StyledItemContacts>
      <StyledTextContacts>
        {name}: {phone}
      </StyledTextContacts>
      <StyledButtonContacts
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </StyledButtonContacts>
    </StyledItemContacts>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
