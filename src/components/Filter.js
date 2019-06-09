import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ title, options, value, handleChange }) => (
  <div>
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
