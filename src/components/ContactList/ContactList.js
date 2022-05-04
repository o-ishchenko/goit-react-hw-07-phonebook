import React from 'react';
import { useFetchContactsQuery } from '../../redux/slice';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

function ContactList({ filter }) {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <>
      {isFetching && <h3>loading...</h3>}
      {contacts && (
        <ul className={s.list}>
          {visibleContacts.map(({ id, name, phone }) => (
            <li key={id}>
              <ContactItem id={id} name={name} number={phone} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string,
};

export default ContactList;
