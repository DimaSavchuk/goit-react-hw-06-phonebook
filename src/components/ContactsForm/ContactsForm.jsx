import React, { useState } from 'react';

import styles from '../../styles/ContactsForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContacts } from 'redux/slicer';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const inContactList = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (inContactList) {
      Notiflix.Notify.warning(`${name} already in your contacts`);
      return;
    }
    dispatch(addContacts(name, number));
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nameInput" className={styles.label}>
        Name
        <input
          placeholder="Name Surname"
          type="text"
          id="nameInput"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label htmlFor="numberInput" className={styles.label}>
        Number
        <input
          placeholder="Phone number"
          type="tel"
          id="numberInput"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          minLength={13}
          onChange={event => setNumber(event.target.value)}
        />
      </label>
      <button type="submit">Add to contacts</button>
    </form>
  );
};

export default ContactsForm;
