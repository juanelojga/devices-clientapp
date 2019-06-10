import React from 'react';
import PropTypes from 'prop-types';

const DeviceView = ({
  system_name,
  type,
  hdd_capacity,
  handleRemoveDevice,
  handleEditDevice
}) => (
  <div>
    <h2>{system_name}</h2>
    <p>{type}</p>
    <p>{hdd_capacity}</p>
    <button onClick={handleRemoveDevice}>Remove</button>
    <button onClick={handleEditDevice}>Edit</button>
  </div>
);

DeviceView.propTypes = {
  system_name: PropTypes.string,
  type: PropTypes.string,
  hdd_capacity: PropTypes.string,
  handleRemoveDevice: PropTypes.func,
  handleEditDevice: PropTypes.func
};

export default DeviceView;
