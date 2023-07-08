import React from 'react';

import styles from '../../styles/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/slicer';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.target.value));
  };
  return (
    <form className={styles.form}>
      <label htmlFor="filterInput" className={styles.label}>
        Filter
        <input
          className={styles.input}
          type="text"
          value={useSelector(getFilter)}
          onChange={handleFilterChange}
          id="filterInput"
        />
      </label>
    </form>
  );
};

export default Filter;
