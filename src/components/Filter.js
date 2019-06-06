import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ title, values }) => (
  <div>
    <label>{title}:&nbsp;</label>
    <select>
      {values.map(value => (
        <option key={value.id}>{value.name}</option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array
};

export default Filter;
