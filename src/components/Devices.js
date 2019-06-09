import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Device from './Device';

const Devices = ({ loading, devices, handleRemoveDevice }) => (
  <div>
    {loading ? (
      <Loading loading={loading} />
    ) : devices.length ? (
      devices.map(device => (
        <Device
          key={device.id}
          system_name={device.system_name}
          type={device.type}
          hdd_capacity={device.hdd_capacity}
          onRemoveDevice={() => handleRemoveDevice(device.id)}
        />
      ))
    ) : (
      <h2>No Results were found.</h2>
    )}
  </div>
);

Devices.propTypes = {
  loading: PropTypes.bool,
  devices: PropTypes.array,
  handleRemoveDevice: PropTypes.func
};

export default Devices;
