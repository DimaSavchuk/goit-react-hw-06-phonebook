import React from 'react';

import styles from '../../styles/Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/slicer';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelate = () => {
    dispatch(deleteContacts(id));
  };
  return (
    <li key={id} className={styles.item}>
      <div className={styles.data}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={styles.button} onClick={handleDelate}>
        Remove
      </button>
    </li>
  );
};

export default Contact;
