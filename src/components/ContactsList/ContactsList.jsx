import React from 'react';
import Contact from 'components/Contact/Contact';

import styles from '../../styles/ContactsList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className={styles.list}>
      {filterContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactsList;
