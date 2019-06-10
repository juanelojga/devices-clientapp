import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Device from './Device';

import styles from './Devices.module.scss';

const Devices = ({
  loading,
  devices,
  handleRemoveDevice,
  handleEditDevice
}) => (
  <div className={styles.devices}>
    {loading ? (
      <Loading loading={loading} />
    ) : devices.length ? (
      devices.map(device => (
        <Device
          key={device.id}
          system_name={device.system_name}
          type={device.type}
          hdd_capacity={device.hdd_capacity}
          handleRemoveDevice={() => handleRemoveDevice(device)}
          handleEditDevice={() => handleEditDevice(device)}
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
  handleRemoveDevice: PropTypes.func,
  handleEditDevice: PropTypes.func
};

export default Devices;
