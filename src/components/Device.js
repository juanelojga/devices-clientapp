import React from 'react';
import PropTypes from 'prop-types';

const DeviceView = ({ system_name, type, hdd_capacity, onRemoveDevice }) => (
  <div>
    <h2>{system_name}</h2>
    <p>{type}</p>
    <p>{hdd_capacity}</p>
    <button onClick={onRemoveDevice}>Remove</button>
  </div>
);

DeviceView.propTypes = {
  system_name: PropTypes.string,
  type: PropTypes.string,
  hdd_capacity: PropTypes.string,
  onRemoveDevice: PropTypes.func
};

export default DeviceView;
