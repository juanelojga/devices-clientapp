import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = ({ title, options, value, handleChange }) => (
  <div className={styles.filter}>
    <label>{title}:&nbsp;</label>
    <select value={value} onChange={handleChange}>
      {options.map(value => (
        <option key={value.id} value={value.id}>
          {value.name}
        </option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default Filter;
