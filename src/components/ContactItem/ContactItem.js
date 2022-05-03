import React from 'react';
import { useDeleteContactMutation } from '../../redux/slice';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <div className={s.item}>
      <h3>{name}</h3>
      <p>{number}</p>
      <button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
